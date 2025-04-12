import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brand } from '../models/brand.model';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationParams, PaginatedResponse } from '../common/types/base.types';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand) private brandModel: typeof Brand
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.brandModel.create(createBrandDto as any);
  }

  async findAll(params?: PaginationParams): Promise<PaginatedResponse<Brand>> {
    try {
      const { page = 1, limit = 10 } = params || {};
      const offset = (page - 1) * limit;
      
      const { rows: data, count: total } = await this.brandModel.findAndCountAll({
        where: { isActive: true },
        offset,
        limit,
        order: [['createdAt', 'DESC']]
      });

      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      };
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Brand> {
    try {
      const brand = await this.brandModel.findOne({
        where: { id, isActive: true }
      });
      
      if (!brand) {
        throw new Error('Brand not found');
      }
      
      return brand;
    } catch (error) {
      console.error('Error in findOne:', error);
      throw error;
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    try {
      const brand = await this.findOne(id);
      if (brand) {
        await brand.update(updateBrandDto as any);
      }
      return brand;
    } catch (error) {
      console.error('Error in update:', error);
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const brand = await this.findOne(id);
      if (brand) {
        await brand.update({ isActive: false });
      }
    } catch (error) {
      console.error('Error in remove:', error);
      throw error;
    }
  }
} 