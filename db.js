// db.js

const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// PostgreSQL configuration using environment variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Full connection string
    ssl: { rejectUnauthorized: false }, // Required for Neon
});

// Export query function for use in other modules
module.exports = {
    query: (text, params) => pool.query(text, params),
};
