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
    try {
        await runMiddleware(req, res, cors);
    } catch (error) {
        return res.status(500).json({ error: "CORS middleware failed" });
    }

    if (req.method === "POST") {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        try {
            await db.query("INSERT INTO newsletter_subscribers (email) VALUES ($1)", [email]);
            res.status(200).json({ message: "Successfully subscribed!" });
        } catch (error) {
            console.error("Error saving email:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
