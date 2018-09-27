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
  },
};
