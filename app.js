// app.js

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db"); // Import the db.js module
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const port = 3001;

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to handle newsletter subscription form
app.post("/api/subscribe", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        // Save email to the database
        await db.query("INSERT INTO newsletter_subscribers (email) VALUES ($1)", [email]);

        res.status(200).json({ message: "Subscribed successfully!" });
    } catch (error) {
        console.error("Error saving email:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
