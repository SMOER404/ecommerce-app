import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Brand } from '../models/brand.model';

async function addProducts() {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'poizonmarket_db',
    models: [Product, Category, Brand],
  });

  try {
    await sequelize.authenticate();
    console.log('Connected to database');

    const products = [
      // Обувь
      {
        id: 'a1b2c3d4-e5f6-4a5b-9c8d-1a2b3c4d5e6f',
        name: 'Adidas Superstar',
        description: 'Классические кроссовки Adidas с фирменной ракушкой',
        price: 8999.99,
        stock: 15,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'b8edd09c-63c7-4c38-be14-696e0d3fee9a',
        brandId: 'b1d9f75c-6e4a-4c2f-9e6d-8c1b3d1e4f5a',
        isActive: true,
      },
      {
        id: 'b2c3d4e5-f6g7-5b6c-0d9e-2b3c4d5e6f7g',
        name: 'Puma RS-X',
        description: 'Современные кроссовки Puma с технологией RS-X',
        price: 9499.99,
        stock: 12,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'b8edd09c-63c7-4c38-be14-696e0d3fee9a',
        brandId: 'c2e8f64d-7f3b-5d1e-8f7c-9d2c4e2f5e6b',
        isActive: true,
      },
      {
        id: 'c3d4e5f6-g7h8-6c7d-1e0f-3c4d5e6f7g8h',
        name: 'New Balance 574',
        description: 'Классические кроссовки New Balance с премиальной отделкой',
        price: 11999.99,
        stock: 8,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'b8edd09c-63c7-4c38-be14-696e0d3fee9a',
        brandId: 'd3f7e53e-8f2c-6e2f-7e8d-0e3d5f3e6f7c',
        isActive: true,
      },
      // Одежда
      {
        id: 'd4e5f6g7-h8i9-7d8e-2f1g-4d5e6f7g8h9i',
        name: 'Nike Tech Fleece Hoodie',
        description: 'Теплый и стильный худи из технологичной ткани',
        price: 7999.99,
        stock: 20,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'c9edd09c-63c7-4c38-be14-696e0d3fee9b',
        brandId: 'fc3ada51-0493-4a6d-af1c-5c03dff96d33',
        isActive: true,
      },
      {
        id: 'e5f6g7h8-i9j0-8e9f-3g2h-5e6f7g8h9i0j',
        name: 'Adidas Trefoil T-Shirt',
        description: 'Классическая футболка с фирменным логотипом',
        price: 2999.99,
        stock: 30,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'c9edd09c-63c7-4c38-be14-696e0d3fee9b',
        brandId: 'b1d9f75c-6e4a-4c2f-9e6d-8c1b3d1e4f5a',
        isActive: true,
      },
      // Аксессуары
      {
        id: 'f6g7h8i9-j0k1-9f0g-4h3i-6f7g8h9i0j1k',
        name: 'Nike Dri-FIT Cap',
        description: 'Спортивная кепка с технологией отвода влаги',
        price: 1999.99,
        stock: 25,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'd9edd09c-63c7-4c38-be14-696e0d3fee9c',
        brandId: 'fc3ada51-0493-4a6d-af1c-5c03dff96d33',
        isActive: true,
      },
      {
        id: 'g7h8i9j0-k1l2-0g1h-5i4j-7g8h9i0j1k2l',
        name: 'Puma Sports Bag',
        description: 'Вместительная спортивная сумка с отделениями',
        price: 3999.99,
        stock: 15,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'd9edd09c-63c7-4c38-be14-696e0d3fee9c',
        brandId: 'c2e8f64d-7f3b-5d1e-8f7c-9d2c4e2f5e6b',
        isActive: true,
      },
      // Экипировка
      {
        id: 'h8i9j0k1-l2m3-1h2i-6j5k-8h9i0j1k2l3m',
        name: 'Adidas Training Gloves',
        description: 'Профессиональные тренировочные перчатки',
        price: 2499.99,
        stock: 18,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'e9edd09c-63c7-4c38-be14-696e0d3fee9d',
        brandId: 'b1d9f75c-6e4a-4c2f-9e6d-8c1b3d1e4f5a',
        isActive: true,
      },
      {
        id: 'i9j0k1l2-m3n4-2i3j-7k6l-9i0j1k2l3m4n',
        name: 'Nike Pro Compression Shorts',
        description: 'Компрессионные шорты для интенсивных тренировок',
        price: 3499.99,
        stock: 22,
        image: '/placeholder.svg?height=600&width=600',
        images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
        categoryId: 'e9edd09c-63c7-4c38-be14-696e0d3fee9d',
        brandId: 'fc3ada51-0493-4a6d-af1c-5c03dff96d33',
        isActive: true,
      }
    ];

    await Product.bulkCreate(products, { ignoreDuplicates: true });
    console.log('Products added successfully');
  } catch (error) {
    console.error('Error adding products:', error);
  } finally {
    await sequelize.close();
  }
}

addProducts(); 