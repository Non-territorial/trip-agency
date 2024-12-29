import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Full connection string from .env
    ssl: { rejectUnauthorized: false }, // Required for Neon
});

export default {
    query: (text, params) => pool.query(text, params),
};
