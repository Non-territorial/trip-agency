import db from "../../db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
    // Run CORS middleware
    await NextCors(req, res, {
        methods: ["POST"],
        origin: "*", // Adjust for production for better security
        optionsSuccessStatus: 200,
    });

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
