const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          
  host: 'localhost',         
  database: 'mspblog1',
  password: '123456',        
  port: 5433,
});

module.exports = pool;
