import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UploadBrandImageDto {
  @ApiProperty({ description: 'URL изображения бренда' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
} 