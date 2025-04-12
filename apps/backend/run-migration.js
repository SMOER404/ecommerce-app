const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'poizonmarket_db',
});

async function runMigration() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database successfully.');

    // Добавляем колонку images
    await sequelize.query('ALTER TABLE products ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT \'{}\';');
    console.log('Added images column.');

    // Копируем существующие изображения
    await sequelize.query('UPDATE products SET images = ARRAY[image] WHERE image IS NOT NULL;');
    console.log('Copied existing images.');

    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Error running migration:', error);
  } finally {
    await sequelize.close();
  }
}

runMigration(); 