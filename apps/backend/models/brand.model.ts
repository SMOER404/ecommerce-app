import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript"
import { Product } from "./product.model"
import { ApiProperty } from "@nestjs/swagger"

@Table({
  tableName: "brands",
  schema: "public",
  timestamps: true,
  underscored: true,
})
export class Brand extends Model {
  @ApiProperty({ description: 'Уникальный идентификатор бренда' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string

  @ApiProperty({ description: 'Название бренда' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string

  @ApiProperty({ description: 'Описание бренда', required: false })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string

  @ApiProperty({ description: 'URL изображения бренда', required: false })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string

  @ApiProperty({ description: 'Статус активности бренда' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean

  @HasMany(() => Product, {
    foreignKey: 'brandId',
    sourceKey: 'id',
    as: 'products'
  })
  products: Product[]
}

