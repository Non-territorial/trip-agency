import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Replace with your production DB URL
    ssl: { rejectUnauthorized: false }, // Required for many cloud-hosted databases
});

export default {
    query: (text, params) => pool.query(text, params),
};
