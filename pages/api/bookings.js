import db from "../../db";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({ origin: "*" });

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
        return res.status(500).json({ error: "CORS middleware failed" });
    }

    if (req.method === "POST") {
        const { name, email, trip, guests, message } = req.body;

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
        res.status(405).json({ error: "Method not allowed" });
    }
}
