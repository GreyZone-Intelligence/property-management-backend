import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { UserRole } from './types/user-role.enum';

// Mock user database - replace with actual database service
const mockUsers = [
  {
    id: 'user_123',
    email: 'landlord@propertyos.com',
    password: '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // demo123
    firstName: 'David',
    lastName: 'Caulcrick',
    role: UserRole.LANDLORD,
    organizationId: 'org_456',
    organizationName: 'GreyZone Properties',
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'user_124',
    email: 'manager@propertyos.com',
    password: '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // demo123
    firstName: 'Property',
    lastName: 'Manager',
    role: UserRole.MANAGER,
    organizationId: 'org_456',
    organizationName: 'GreyZone Properties',
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'user_125',
    email: 'tenant@propertyos.com',
    password: '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // demo123
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: UserRole.TENANT,
    organizationId: 'org_456',
    organizationName: 'GreyZone Properties',
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'user_126',
    email: 'vendor@propertyos.com',
    password: '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // demo123
    firstName: 'Quick',
    lastName: 'Fix',
    role: UserRole.VENDOR,
    organizationId: 'org_789',
    organizationName: 'QuickFix Services',
    emailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<AuthResponseDto | null> {
    const { email, password } = loginDto;

    // Find user by email
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      return null;
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    // Generate tokens
    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        organizationId: user.organizationId,
        organizationName: user.organizationName,
        avatar: undefined,
        emailVerified: user.emailVerified,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      organization: {
        id: user.organizationId,
        name: user.organizationName,
        type: 'enterprise',
        settings: {
          allowTenantRegistration: true,
          requireVendorApproval: true,
          enableAutomatedPayments: true,
          timezone: 'America/New_York',
          currency: 'USD',
        },
      },
      accessToken,
      refreshToken,
      expiresIn: 86400, // 24 hours
    };
  }

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const { firstName, lastName, email, password, role, organizationName, organizationType } = registerDto;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user (in real app, save to database)
    const newUser = {
      id: `user_${Date.now()}`,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      role: role as UserRole,
      organizationId: `org_${Date.now()}`,
      organizationName: organizationName || `${firstName}'s Organization`,
      emailVerified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Generate tokens
    const payload = { sub: newUser.id, email: newUser.email, role: newUser.role };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
        organizationId: newUser.organizationId,
        organizationName: newUser.organizationName,
        avatar: undefined,
        emailVerified: newUser.emailVerified,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
      organization: {
        id: newUser.organizationId,
        name: newUser.organizationName,
        type: organizationType || 'individual',
        settings: {
          allowTenantRegistration: true,
          requireVendorApproval: true,
          enableAutomatedPayments: false,
          timezone: 'America/New_York',
          currency: 'USD',
        },
      },
      accessToken,
      refreshToken,
      expiresIn: 86400,
    };
  }

  async refreshToken(refreshToken: string): Promise<AuthResponseDto | null> {
    try {
      const decoded = this.jwtService.verify(refreshToken);
      const user = mockUsers.find(u => u.id === decoded.sub);
      
      if (!user) {
        return null;
      }

      const payload = { sub: user.id, email: user.email, role: user.role };
      const newAccessToken = this.jwtService.sign(payload);
      const newRefreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

      return {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          organizationId: user.organizationId,
          organizationName: user.organizationName,
          avatar: undefined,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        organization: {
          id: user.organizationId,
          name: user.organizationName,
          type: 'enterprise',
          settings: {
            allowTenantRegistration: true,
            requireVendorApproval: true,
            enableAutomatedPayments: true,
            timezone: 'America/New_York',
            currency: 'USD',
          },
        },
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        expiresIn: 86400,
      };
    } catch (error) {
      return null;
    }
  }

  async validateUser(userId: string): Promise<any> {
    return mockUsers.find(user => user.id === userId);
  }
}