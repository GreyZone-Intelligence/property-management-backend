import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../types/user-role.enum';

export class UserDto {
  @ApiProperty({ description: 'User ID', example: 'user_123' })
  id: string;

  @ApiProperty({ description: 'Email address', example: 'user@example.com' })
  email: string;

  @ApiProperty({ description: 'First name', example: 'John' })
  firstName: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  lastName: string;

  @ApiProperty({ description: 'User role', enum: UserRole })
  role: UserRole;

  @ApiProperty({ description: 'Organization ID', example: 'org_456' })
  organizationId: string;

  @ApiProperty({ description: 'Organization name', example: 'Property Co.' })
  organizationName: string;

  @ApiProperty({ description: 'Avatar URL', required: false })
  avatar?: string;

  @ApiProperty({ description: 'Email verified status', example: true })
  emailVerified: boolean;

  @ApiProperty({ description: 'Created at timestamp' })
  createdAt: string;

  @ApiProperty({ description: 'Updated at timestamp' })
  updatedAt: string;
}

export class OrganizationSettingsDto {
  @ApiProperty({ description: 'Allow tenant registration', example: true })
  allowTenantRegistration: boolean;

  @ApiProperty({ description: 'Require vendor approval', example: true })
  requireVendorApproval: boolean;

  @ApiProperty({ description: 'Enable automated payments', example: true })
  enableAutomatedPayments: boolean;

  @ApiProperty({ description: 'Timezone', example: 'America/New_York' })
  timezone: string;

  @ApiProperty({ description: 'Currency', example: 'USD' })
  currency: string;
}

export class OrganizationDto {
  @ApiProperty({ description: 'Organization ID', example: 'org_456' })
  id: string;

  @ApiProperty({ description: 'Organization name', example: 'Property Co.' })
  name: string;

  @ApiProperty({ 
    description: 'Organization type', 
    enum: ['individual', 'company', 'enterprise'],
    example: 'enterprise'
  })
  type: string;

  @ApiProperty({ description: 'Organization logo URL', required: false })
  logo?: string;

  @ApiProperty({ description: 'Organization settings' })
  settings: OrganizationSettingsDto;
}

export class AuthResponseDto {
  @ApiProperty({ description: 'User information' })
  user: UserDto;

  @ApiProperty({ description: 'Organization information' })
  organization: OrganizationDto;

  @ApiProperty({ 
    description: 'JWT access token', 
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  })
  accessToken: string;

  @ApiProperty({ 
    description: 'JWT refresh token', 
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  })
  refreshToken: string;

  @ApiProperty({ description: 'Token expiration time in seconds', example: 3600 })
  expiresIn: number;
}