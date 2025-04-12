import { IsString, IsUUID, IsArray, IsOptional, ValidateNested, IsNumber, Min, IsBoolean } from "class-validator"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { CreateProductVariantDto } from "./create-product-variant.dto"

export class CreateProductDto {
  @ApiProperty({ example: "Premium Sneakers" })
  @IsString()
  name: string

  @ApiProperty({ example: "High-quality sneakers with advanced cushioning" })
  @IsString()
  @IsOptional()
  description?: string

  @ApiProperty({ example: 9999.99 })
  @IsNumber()
  @Min(0)
  price: number

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  stock: number

  @ApiProperty({ example: "123e4567-e89b-12d3-a456-426614174000" })
  @IsUUID()
  categoryId: string

  @ApiProperty({ example: "123e4567-e89b-12d3-a456-426614174000" })
  @IsUUID()
  brandId: string

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean

  @ApiProperty({ type: [CreateProductVariantDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  @IsOptional()
  variants?: CreateProductVariantDto[]
}

