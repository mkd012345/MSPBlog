const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // PostgreSQL user
  host: 'localhost',         // Host (localhost)
  database: 'mspblog1',      // Database name
  password: '123456',        // Password for user
  port: 5433,                // Port for PostgreSQL
});

module.exports = pool;
