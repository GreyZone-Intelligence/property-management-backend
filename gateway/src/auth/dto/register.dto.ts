import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../types/user-role.enum';

export class RegisterDto {
  @ApiProperty({
    description: 'First name',
    example: 'John',
  })
  @IsString()
  @MinLength(1)
  firstName: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Doe',
  })
  @IsString()
  @MinLength(1)
  lastName: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password (minimum 6 characters)',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'User role',
    enum: UserRole,
    example: UserRole.LANDLORD,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({
    description: 'Organization name (optional)',
    example: 'Property Management Co.',
    required: false,
  })
  @IsOptional()
  @IsString()
  organizationName?: string;

  @ApiProperty({
    description: 'Organization type (optional)',
    enum: ['individual', 'company', 'enterprise'],
    example: 'company',
    required: false,
  })
  @IsOptional()
  @IsString()
  organizationType?: string;
}