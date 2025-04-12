import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';

config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'poizonmarket_db',
  logging: false,
});

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database successfully.');

    // Импортируем сидеры
    const brandsSeeder = require('../../seeders/20240324-brands');
    const categoriesSeeder = require('../../seeders/20240324-categories');
    const productsSeeder = require('../../seeders/20240324-products');

    // Запускаем сидеры в правильном порядке
    await brandsSeeder.up(sequelize.getQueryInterface(), Sequelize);
    console.log('Brands seeded successfully.');

    await categoriesSeeder.up(sequelize.getQueryInterface(), Sequelize);
    console.log('Categories seeded successfully.');

    await productsSeeder.up(sequelize.getQueryInterface(), Sequelize);
    console.log('Products seeded successfully.');

    console.log('Database seeding completed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 