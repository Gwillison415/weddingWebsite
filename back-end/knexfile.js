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
    connection: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_ACCESS_KEY,
    
  },
};
