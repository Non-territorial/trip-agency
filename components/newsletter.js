import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState(""); // Email state
    const [formMessage, setFormMessage] = useState(""); // Message state

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setFormMessage("Successfully subscribed!");
                setEmail(""); // Reset the email field
            } else {
                const errorData = await response.json();
                setFormMessage(`Failed to subscribe: ${errorData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setFormMessage("An error occurred while subscribing. Please try again.");
        }
    };

    return (
        <div id="newsletter" className="newsletter-section">
        <h2 className="heading">Newsletter</h2>
        <p className="description">
            Subscribe to receive announcements about TRIPS and a look behind the scenes.
        </p>
        <form id="newsletter-form" onSubmit={handleSubmit}>
    <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email} // Bind state to the input field
        onChange={(e) => setEmail(e.target.value)} // Update email state
        required
    />
    <button type="submit">Subscribe</button>
</form>
<p id="form-message">{formMessage}</p>
    </div>
    );
}
