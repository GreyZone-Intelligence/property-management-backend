import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsArray, IsEnum, Min } from 'class-validator';

export enum PropertyType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  CONDO = 'CONDO',
  TOWNHOME = 'TOWNHOME',
  COMMERCIAL = 'COMMERCIAL',
}

export class CreatePropertyDto {
  @ApiProperty({ description: 'Property name', example: 'Sunset Vista Apartments' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Property address', example: '123 Sunset Boulevard' })
  @IsString()
  address: string;

  @ApiProperty({ description: 'City', example: 'Los Angeles' })
  @IsString()
  city: string;

  @ApiProperty({ description: 'State', example: 'CA' })
  @IsString()
  state: string;

  @ApiProperty({ description: 'ZIP code', example: '90028' })
  @IsString()
  zipCode: string;

  @ApiProperty({ description: 'Property type', enum: PropertyType })
  @IsEnum(PropertyType)
  type: PropertyType;

  @ApiProperty({ description: 'Property description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Total number of units', example: 24 })
  @IsInt()
  @Min(1)
  totalUnits: number;

  @ApiProperty({ description: 'Year built', required: false, example: 2018 })
  @IsOptional()
  @IsInt()
  yearBuilt?: number;

  @ApiProperty({ description: 'Total square feet', required: false, example: 25000 })
  @IsOptional()
  @IsInt()
  squareFeet?: number;

  @ApiProperty({ 
    description: 'Property amenities', 
    required: false,
    type: [String],
    example: ['Pool', 'Gym', 'Parking']
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  amenities?: string[];

  @ApiProperty({ 
    description: 'Property images', 
    required: false,
    type: [String]
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiProperty({ description: 'Organization ID', example: 'org_456' })
  @IsString()
  organizationId: string;

  @ApiProperty({ description: 'Manager ID', required: false })
  @IsOptional()
  @IsString()
  managerId?: string;
}