import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript"
import { Category } from "./category.model"
import { Brand } from "./brand.model"

@Table({
  tableName: "products",
  schema: "public",
  timestamps: true,
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  stock: number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    defaultValue: [],
  })
  images: string[]

  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'category_id'
  })
  categoryId: string

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    field: 'brand_id'
  })
  brandId: string

  @BelongsTo(() => Category)
  category: Category

  @BelongsTo(() => Brand)
  brand: Brand

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'is_active'
  })
  isActive: boolean

  @Column({
    type: DataType.DATE,
    field: 'created_at'
  })
  createdAt: Date

  @Column({
    type: DataType.DATE,
    field: 'updated_at'
  })
  updatedAt: Date
}

