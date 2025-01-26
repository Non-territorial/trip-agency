import db from "../../db";
import { applyCors } from "../../lib/cors";

export default async function handler(req, res) {
    // Run custom CORS middleware
    if (applyCors(req, res)) return; // Handle preflight requests (OPTIONS)

    // Only handle POST requests
    if (req.method === "POST") {
        const { email } = req.body;

        // Validate input
        if (!email || typeof email !== "string") {
            return res.status(400).json({ error: "A valid email is required" });
        }

        try {
            const query = "INSERT INTO newsletter_subscribers (email) VALUES ($1)";
            const values = [email];
        
            console.log("Running query:", query, "with values:", values); // Add this line
            await db.query(query, values);
        
            return res.status(200).json({ message: "Successfully subscribed!" });
        } catch (error) {
            console.error("Error saving email:", error); // Log full error
            if (error.code === "23505") {
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
