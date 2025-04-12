import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: 'postgres', // Подключаемся к системной базе данных
  logging: false,
});

async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL successfully.');

    // Создаем базу данных, если она не существует
    await sequelize.query('CREATE DATABASE poizonmarket_db');
    console.log('Database "poizonmarket_db" created successfully.');

    // Закрываем соединение
    await sequelize.close();
    console.log('Database initialization completed.');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('Database "poizonmarket_db" already exists.');
    } else {
      console.error('Error initializing database:', error);
    }
    process.exit(1);
  }
}

initDatabase(); 