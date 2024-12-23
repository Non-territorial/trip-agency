// db.js

const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// PostgreSQL configuration using environment variables
const pool = new Pool({
    user: process.env.PG_USER, // PostgreSQL username from .env
    host: process.env.PG_HOST, // PostgreSQL host from .env
    database: process.env.PG_DATABASE, // PostgreSQL database name from .env
    password: process.env.PG_PASSWORD, // PostgreSQL password from .env
    port: process.env.PG_PORT, // PostgreSQL port from .env
});

// Export query function for use in other modules
module.exports = {
    query: (text, params) => pool.query(text, params),
};
