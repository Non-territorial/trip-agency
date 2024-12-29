import db from "../../db"; // Ensure your db instance is properly set up
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
    methods: ["POST"], // Explicitly allow only POST requests
    origin: "*", // Adjust the origin for production for security
});

// Utility function to run middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve(result);
        });
    });
}

export default async function handler(req, res) {
    // Run the CORS middleware
    try {
        await runMiddleware(req, res, cors);
    } catch (error) {
        console.error("CORS middleware failed:", error);
        return res.status(500).json({ error: "CORS middleware failed" });
    }

    // Only handle POST requests
    if (req.method === "POST") {
        const { email } = req.body;

        // Validate input
        if (!email || typeof email !== "string") {
            return res.status(400).json({ error: "A valid email is required" });
        }

        try {
            // Insert email into the database
            const query = "INSERT INTO newsletter_subscribers (email) VALUES ($1)";
            const values = [email];

            await db.query(query, values);

            // Respond with success
            return res.status(200).json({ message: "Successfully subscribed!" });
        } catch (error) {
            // Handle database errors, such as duplicate email entries
            console.error("Error saving email:", error);

            if (error.code === "23505") { // PostgreSQL unique constraint violation
                return res.status(400).json({ error: "Email already subscribed" });
            }

            return res.status(500).json({ error: "Internal server error" });
        }
    } else {
        // Respond with 405 for unsupported methods
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: "Method not allowed" });
    }
}
