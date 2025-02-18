// configuration for the database connection based on the environment (development, test, production)
const config = {
  development: {
    username: 'postgres',
    password: 'Skuubydoo123',
    database: 'StudentPortal',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'Skuubydoo123',
    database: 'StudentPortal',
    host: 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: 'postgres',
    password: 'Skuubydoo123',
    database: 'StudentPortal',
    host: 'localhost',
    dialect: 'postgres'
  }
};

export default config;
