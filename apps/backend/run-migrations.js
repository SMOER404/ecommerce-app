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

async function runMigrations() {
  try {
    await sequelize.authenticate();
    console.log('Connected to database successfully.');

    const migrationsDir = path.join(__dirname, 'database', 'migrations');
    const files = await fs.readdir(migrationsDir);
    const sqlFiles = files.filter(file => file.endsWith('.sql')).sort();

    for (const file of sqlFiles) {
      console.log(`Running migration: ${file}`);
      const sql = await fs.readFile(path.join(migrationsDir, file), 'utf-8');
      await sequelize.query(sql);
      console.log(`Migration ${file} completed successfully.`);
    }

    console.log('All migrations completed successfully.');
  } catch (error) {
    console.error('Error running migrations:', error);
  } finally {
    await sequelize.close();
  }
}

runMigrations(); 