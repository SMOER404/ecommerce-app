module.exports = {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'poizonmarket_db',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  test: {
    username: 'postgres',
    password: 'root',
    database: 'poizonmarket_db_test',
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
}; 