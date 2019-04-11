module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/glowOrder_db'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/glowOrder_db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}