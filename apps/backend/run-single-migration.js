const { Sequelize } = require('sequelize');
const fs = require('fs').promises;
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'poizonmarket_db',
});

async function runMigration(filename) {
  try {
    await sequelize.authenticate();
    console.log('Connected to database successfully.');

    const migrationPath = path.join(__dirname, 'database', 'migrations', filename);
    console.log(`Running migration: ${filename}`);
    const sql = await fs.readFile(migrationPath, 'utf-8');
    await sequelize.query(sql);
    console.log(`Migration ${filename} completed successfully.`);
  } catch (error) {
    console.error('Error running migration:', error);
  } finally {
    await sequelize.close();
  }
}

const migrationFile = process.argv[2];
if (!migrationFile) {
  console.error('Please provide a migration file name as an argument');
  process.exit(1);
}

runMigration(migrationFile); 