import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { ProductsService } from "./products.service"
import { ProductsController } from "./products.controller"
import { Product } from "../models/product.model"
import { ProductVariant } from "../models/product-variant.model"
import { Category } from "../models/category.model"
import { Brand } from "../models/brand.model"
import { FilesModule } from "../files/files.module"

@Module({
  imports: [
    SequelizeModule.forFeature([
      Category,
      Brand,
      Product,
      ProductVariant
    ]),
    FilesModule
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}

