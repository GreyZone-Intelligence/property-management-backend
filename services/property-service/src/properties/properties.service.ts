import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyQueryDto } from './dto/property-query.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: PropertyQueryDto) {
    const { organizationId, search, type, limit = 50, offset = 0 } = query;
    
    const where: any = {};
    
    if (organizationId) {
      where.organizationId = organizationId;
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (type) {
      where.type = type;
    }

    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        include: {
          units: {
            select: {
              id: true,
              number: true,
              isOccupied: true,
              monthlyRent: true,
            },
          },
          _count: {
            select: {
              units: true,
              maintenanceRequests: {
                where: { status: { not: 'COMPLETED' } },
              },
            },
          },
        },
        skip: offset,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.property.count({ where }),
    ]);

    // Calculate occupancy and revenue for each property
    const propertiesWithMetrics = properties.map(property => {
      const occupiedUnits = property.units.filter(unit => unit.isOccupied).length;
      const totalUnits = property.units.length;
      const occupancyRate = totalUnits > 0 ? (occupiedUnits / totalUnits) * 100 : 0;
      const monthlyRevenue = property.units
        .filter(unit => unit.isOccupied)
        .reduce((sum, unit) => sum + Number(unit.monthlyRent), 0);

      return {
        id: property.id,
        name: property.name,
        address: property.address,
        city: property.city,
        state: property.state,
        zipCode: property.zipCode,
        type: property.type,
        description: property.description,
        totalUnits: property.totalUnits,
        occupiedUnits,
        occupancyRate: Math.round(occupancyRate * 10) / 10,
        monthlyRevenue,
        yearBuilt: property.yearBuilt,
        squareFeet: property.squareFeet,
        amenities: property.amenities,
        images: property.images,
        pendingMaintenance: property._count.maintenanceRequests,
        createdAt: property.createdAt,
        updatedAt: property.updatedAt,
      };
    });

    return {
      properties: propertiesWithMetrics,
      pagination: {
        total,
        limit,
        offset,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        units: {
          include: {
            leases: {
              where: { isActive: true },
              include: {
                tenant: {
                  include: {
                    user: {
                      select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        maintenanceRequests: {
          where: { status: { not: 'COMPLETED' } },
          include: {
            tenant: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
        _count: {
          select: {
            units: true,
            maintenanceRequests: {
              where: { status: { not: 'COMPLETED' } },
            },
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }

    // Calculate metrics
    const occupiedUnits = property.units.filter(unit => unit.isOccupied).length;
    const occupancyRate = property.totalUnits > 0 ? 
      (occupiedUnits / property.totalUnits) * 100 : 0;
    const monthlyRevenue = property.units
      .filter(unit => unit.isOccupied)
      .reduce((sum, unit) => sum + Number(unit.monthlyRent), 0);

    return {
      ...property,
      occupiedUnits,
      occupancyRate: Math.round(occupancyRate * 10) / 10,
      monthlyRevenue,
      annualRevenue: monthlyRevenue * 12,
    };
  }

  async create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: createPropertyDto,
    });
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    const property = await this.prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }

    return this.prisma.property.update({
      where: { id },
      data: updatePropertyDto,
    });
  }

  async remove(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }

    return this.prisma.property.delete({
      where: { id },
    });
  }

  async getUnits(propertyId: string) {
    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) {
      throw new NotFoundException(`Property with ID ${propertyId} not found`);
    }

    return this.prisma.unit.findMany({
      where: { propertyId },
      include: {
        leases: {
          where: { isActive: true },
          include: {
            tenant: {
              include: {
                user: {
                  select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { number: 'asc' },
    });
  }

  async getAnalytics(propertyId: string) {
    const property = await this.findOne(propertyId);
    
    // Get payment data for the property
    const payments = await this.prisma.payment.findMany({
      where: {
        propertyId,
        status: 'COMPLETED',
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12)),
        },
      },
      select: {
        amount: true,
        type: true,
        createdAt: true,
      },
    });

    // Calculate monthly revenue trends
    const monthlyRevenue = {};
    const monthlyExpenses = {};
    
    payments.forEach(payment => {
      const month = payment.createdAt.toISOString().substring(0, 7); // YYYY-MM
      const amount = Number(payment.amount);
      
      if (amount > 0) { // Income
        monthlyRevenue[month] = (monthlyRevenue[month] || 0) + amount;
      } else { // Expense
        monthlyExpenses[month] = (monthlyExpenses[month] || 0) + Math.abs(amount);
      }
    });

    return {
      property: {
        id: property.id,
        name: property.name,
        occupancyRate: property.occupancyRate,
        monthlyRevenue: property.monthlyRevenue,
        annualRevenue: property.annualRevenue,
      },
      trends: {
        monthlyRevenue,
        monthlyExpenses,
      },
      summary: {
        totalUnits: property.totalUnits,
        occupiedUnits: property.occupiedUnits,
        vacantUnits: property.totalUnits - property.occupiedUnits,
        pendingMaintenance: property._count.maintenanceRequests,
      },
    };
  }
}