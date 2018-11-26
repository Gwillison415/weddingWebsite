require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/weddingdb',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/weddingdb',
  },

  production: {
    client: 'pg',
    connection: {
       port: process.env.DB_PORT,
       host: process.env.DB_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_ACCESS_KEY,}

  },
};
