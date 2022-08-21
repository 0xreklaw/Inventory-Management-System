const Pool = require('pg').Pool;
const { POOL_USER, POOL_HOST, POOL_DATABASE, POOL_PASSWORD } = require('./config');

// @Note: store configuration in env file for production use
const pool = new Pool({
    user: POOL_USER,
    host: POOL_HOST,
    database: POOL_DATABASE,
    password: POOL_PASSWORD,
    post: 5432
});

// @Note: I'm not sure if this is secure, could be sending sensative info
module.exports = pool;