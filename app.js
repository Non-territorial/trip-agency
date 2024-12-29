const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./db"); // Import the db.js module
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Routes to serve HTML pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/booking", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "booking.html"));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
