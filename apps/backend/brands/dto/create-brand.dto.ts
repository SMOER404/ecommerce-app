import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ 
    description: 'Название бренда',
    example: 'Nike',
    minLength: 2,
    maxLength: 100
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    description: 'Описание бренда',
    example: 'Американская компания, производитель спортивной одежды и обуви',
    required: false
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ 
    description: 'URL изображения бренда',
    example: 'https://example.com/nike-image.png',
    required: false
  })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ 
    description: 'Статус активности бренда',
    example: true,
    default: true
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
} 