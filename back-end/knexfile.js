require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/weddingdb'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/weddingdb'
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_ACCESS_KEY,
      database: process.env.DATABASE_NAME
    }

  }
};
