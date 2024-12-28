document.getElementById("newsletter-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    try {
        const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert("Successfully subscribed!");
        } else {
            alert("Failed to subscribe. Please try again.");
        }
    } catch (error) {
        console.error("Error subscribing:", error);
        alert("An error occurred. Please try again.");
    }
});
