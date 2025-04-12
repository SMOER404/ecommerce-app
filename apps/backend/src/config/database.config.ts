import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const config: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'poizonmarket_db',
  autoLoadModels: true,
  synchronize: false,
  logging: false,
}; 