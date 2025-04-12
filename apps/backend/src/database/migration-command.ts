import { Sequelize } from 'sequelize-typescript';
import { config } from '../config/database.config';
import * as path from 'path';
import * as fs from 'fs';

const sequelize = new Sequelize(config);

async function runMigrations() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    const migrationsDir = path.join(__dirname, '..', '..', 'database', 'migrations');
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.ts'))
      .sort();

    for (const file of files) {
      const migration = require(path.join(migrationsDir, file));
      console.log(`Running migration: ${file}`);
      await migration.up(sequelize.getQueryInterface());
    }

    console.log('All migrations completed successfully.');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

async function rollbackMigration() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    const migrationsDir = path.join(__dirname, '..', '..', 'database', 'migrations');
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.ts'))
      .sort()
      .reverse();

    if (files.length > 0) {
      const lastMigration = files[0];
      const migration = require(path.join(migrationsDir, lastMigration));
      console.log(`Rolling back migration: ${lastMigration}`);
      await migration.down(sequelize.getQueryInterface());
    }

    console.log('Migration rollback completed successfully.');
  } catch (error) {
    console.error('Error rolling back migration:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

const command = process.argv[2];

switch (command) {
  case 'up':
    runMigrations();
    break;
  case 'down':
    rollbackMigration();
    break;
  default:
    console.error('Invalid command. Use "up" or "down"');
    process.exit(1);
} 