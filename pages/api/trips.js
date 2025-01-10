export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // Fetch the JSON file from the public folder
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/trips.json`);
            const trips = await response.json();
            res.status(200).json(trips);
        } catch (error) {
            console.error("Error fetching trips:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

