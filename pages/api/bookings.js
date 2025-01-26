import db from "../../db";
import { applyCors } from "../../lib/cors"; // Import custom CORS utility

export default async function handler(req, res) {
    // Run custom CORS middleware
    if (applyCors(req, res)) return; // Handle preflight requests (OPTIONS)

    if (req.method === "POST") {
        const { name, email, trip, guests, message } = req.body;

        // Validate input
        if (!name || !email || !trip || !guests) {
            return res.status(400).json({
                error: "Name, email, trip, and guests are required",
            });
        }

        try {
            await db.query(
                "INSERT INTO booking_inquiries (name, email, trip, guests, message) VALUES ($1, $2, $3, $4, $5)",
                [name, email, trip, guests, message || null]
            );
            res.status(200).json({ message: "Booking inquiry saved successfully!" });
        } catch (error) {
            console.error("Error saving booking inquiry:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: "Method not allowed" });
    }
}
