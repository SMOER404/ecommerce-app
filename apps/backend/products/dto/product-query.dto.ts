import { IsUUID, IsOptional, IsInt, Min, IsNumber, IsString } from "class-validator"
import { Type, Transform } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class ProductQueryDto {
  @ApiProperty({ required: false, example: 1 })
  @IsInt()
  @Min(1)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page?: number

  @ApiProperty({ required: false, example: 10 })
  @IsInt()
  @Min(1)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit?: number

  @ApiProperty({ required: false, example: "123e4567-e89b-12d3-a456-426614174000" })
  @IsUUID()
  @IsOptional()
  categoryId?: string

  @ApiProperty({ required: false, example: "123e4567-e89b-12d3-a456-426614174000" })
  @IsUUID()
  @IsOptional()
  brandId?: string

  @ApiProperty({ required: false, example: 50 })
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  minPrice?: number

  @ApiProperty({ required: false, example: 200 })
  @IsNumber()
  @Min(0)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  maxPrice?: number

  @ApiProperty({ required: false, example: "sneakers" })
  @IsString()
  @IsOptional()
  search?: string
}

