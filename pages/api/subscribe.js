import db from "../../db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        try {
            await db.query("INSERT INTO newsletter_subscribers (email) VALUES ($1)", [email]);
            res.status(200).json({ message: "Subscribed successfully!" });
        } catch (error) {
            console.error("Error saving email:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}


