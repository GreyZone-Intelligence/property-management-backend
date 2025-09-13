import { PrismaClient } from './generated/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create organization
  const organization = await prisma.organization.upsert({
    where: { id: 'org_456' },
    update: {},
    create: {
      id: 'org_456',
      name: 'GreyZone Properties',
      type: 'enterprise',
      allowTenantRegistration: true,
      requireVendorApproval: true,
      enableAutomatedPayments: true,
      timezone: 'America/New_York',
      currency: 'USD',
    },
  });

  console.log('✅ Organization created');

  // Hash password for demo users
  const hashedPassword = await bcrypt.hash('demo123', 10);

  // Create users
  const landlordUser = await prisma.user.upsert({
    where: { email: 'landlord@propertyos.com' },
    update: {},
    create: {
      id: 'user_123',
      email: 'landlord@propertyos.com',
      password: hashedPassword,
      firstName: 'David',
      lastName: 'Caulcrick',
      role: 'LANDLORD',
      emailVerified: true,
      organizationId: organization.id,
    },
  });

  const managerUser = await prisma.user.upsert({
    where: { email: 'manager@propertyos.com' },
    update: {},
    create: {
      id: 'user_124',
      email: 'manager@propertyos.com',
      password: hashedPassword,
      firstName: 'Property',
      lastName: 'Manager',
      role: 'MANAGER',
      emailVerified: true,
      organizationId: organization.id,
    },
  });

  const tenantUser = await prisma.user.upsert({
    where: { email: 'tenant@propertyos.com' },
    update: {},
    create: {
      id: 'user_125',
      email: 'tenant@propertyos.com',
      password: hashedPassword,
      firstName: 'Sarah',
      lastName: 'Johnson',
      role: 'TENANT',
      emailVerified: true,
      organizationId: organization.id,
    },
  });

  const vendorUser = await prisma.user.upsert({
    where: { email: 'vendor@propertyos.com' },
    update: {},
    create: {
      id: 'user_126',
      email: 'vendor@propertyos.com',
      password: hashedPassword,
      firstName: 'Quick',
      lastName: 'Fix',
      role: 'VENDOR',
      emailVerified: true,
      organizationId: organization.id,
    },
  });

  console.log('✅ Users created');

  // Create tenant profile
  const tenant = await prisma.tenant.upsert({
    where: { userId: tenantUser.id },
    update: {},
    create: {
      userId: tenantUser.id,
      phone: '(555) 123-4567',
      emergencyContact: {
        name: 'John Johnson',
        phone: '(555) 987-6543',
        relationship: 'Husband',
      },
      moveInDate: new Date('2023-01-15'),
    },
  });

  // Create vendor profile
  const vendor = await prisma.vendor.upsert({
    where: { userId: vendorUser.id },
    update: {},
    create: {
      userId: vendorUser.id,
      businessName: 'QuickFix Plumbing',
      specialties: ['Plumbing', 'Emergency Repairs'],
      hourlyRate: 85.00,
      rating: 4.8,
      completedJobs: 127,
      isVerified: true,
      organizationId: organization.id,
    },
  });

  console.log('✅ Profiles created');

  // Create properties
  const property1 = await prisma.property.create({
    data: {
      id: 'prop_1',
      name: 'Sunset Vista Apartments',
      address: '123 Sunset Boulevard',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90028',
      type: 'APARTMENT',
      description: 'Modern apartment complex with pool and gym',
      totalUnits: 24,
      yearBuilt: 2018,
      squareFeet: 25000,
      amenities: ['Pool', 'Gym', 'Parking', 'Laundry'],
      organizationId: organization.id,
      managerId: managerUser.id,
    },
  });

  const property2 = await prisma.property.create({
    data: {
      id: 'prop_2',
      name: 'Downtown Loft Complex',
      address: '456 Main Street',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90013',
      type: 'APARTMENT',
      description: 'Urban loft-style apartments in downtown',
      totalUnits: 12,
      yearBuilt: 2020,
      squareFeet: 18000,
      amenities: ['Rooftop', 'Concierge', 'Pet Friendly'],
      organizationId: organization.id,
      managerId: managerUser.id,
    },
  });

  console.log('✅ Properties created');

  // Create units
  const unit1 = await prisma.unit.create({
    data: {
      id: 'unit_1',
      number: '3B',
      floor: 3,
      bedrooms: 2,
      bathrooms: 1.5,
      squareFeet: 950,
      monthlyRent: 1850.00,
      securityDeposit: 1850.00,
      isOccupied: true,
      propertyId: property1.id,
      features: ['Balcony', 'Updated Kitchen'],
    },
  });

  const unit2 = await prisma.unit.create({
    data: {
      id: 'unit_2',
      number: '7A',
      floor: 7,
      bedrooms: 2,
      bathrooms: 2.0,
      squareFeet: 1200,
      monthlyRent: 2200.00,
      securityDeposit: 2200.00,
      isOccupied: true,
      propertyId: property2.id,
      features: ['City View', 'Modern Appliances'],
    },
  });

  console.log('✅ Units created');

  // Create lease
  const lease = await prisma.lease.create({
    data: {
      id: 'lease_1',
      tenantId: tenant.id,
      unitId: unit1.id,
      startDate: new Date('2023-01-15'),
      endDate: new Date('2024-01-14'),
      monthlyRent: 1850.00,
      securityDeposit: 1850.00,
      lateFeeDays: 5,
      lateFeeAmount: 50.00,
      isActive: true,
    },
  });

  console.log('✅ Lease created');

  // Create maintenance request
  const maintenanceRequest = await prisma.maintenanceRequest.create({
    data: {
      id: 'maint_1',
      title: 'Kitchen Faucet Leak',
      description: 'Kitchen faucet has been leaking for 2 days. Water drips constantly even when turned off completely.',
      category: 'Plumbing',
      priority: 'HIGH',
      status: 'ASSIGNED',
      propertyId: property1.id,
      unitId: unit1.id,
      tenantId: tenantUser.id,
      assignedVendorId: vendor.id,
      estimatedCost: 150.00,
    },
  });

  console.log('✅ Maintenance request created');

  // Create payments
  await prisma.payment.create({
    data: {
      id: 'pay_1',
      amount: 1850.00,
      type: 'RENT',
      status: 'COMPLETED',
      method: 'bank_transfer',
      description: 'January 2024 Rent Payment',
      dueDate: new Date('2024-01-01'),
      paidDate: new Date('2024-01-01'),
      propertyId: property1.id,
      leaseId: lease.id,
      tenantId: tenantUser.id,
      transactionId: 'TXN-20240101-001',
    },
  });

  await prisma.payment.create({
    data: {
      id: 'pay_2',
      amount: -150.00,
      type: 'MAINTENANCE',
      status: 'COMPLETED',
      method: 'check',
      description: 'Kitchen faucet repair - Emergency plumbing',
      dueDate: new Date('2024-01-10'),
      paidDate: new Date('2024-01-11'),
      propertyId: property1.id,
      vendorId: vendor.id,
      maintenanceRequestId: maintenanceRequest.id,
      transactionId: 'TXN-20240111-002',
    },
  });

  console.log('✅ Payments created');

  console.log('🎉 Database seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });