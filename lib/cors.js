// lib/cors.js
export function applyCors(req, res) {
    const allowedOrigins = ["https://trip-agency.net", "http://localhost:3000"]; // Add your domains
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
        res.setHeader("Access-Control-Allow-Origin", "null");
    }

    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(200).end(); // End preflight request
        return true;
    }

    return false; // Continue request processing
}
