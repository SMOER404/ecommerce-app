import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async findAll(page: number = 1, limit: number = 10) {
    const { rows: products, count: total } = await this.productModel.findAndCountAll({
      limit,
      offset: (page - 1) * limit,
      where: {
        isActive: true,
      },
      include: ['category', 'brand'],
    });

    return {
      data: products,
      total,
      page,
      limit,
    };
  }
} 