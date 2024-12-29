document.getElementById("newsletter-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = e.target.email.value; // Get the email value from the form

    try {
        const response = await fetch("/api/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert("Successfully subscribed!");
        } else {
            const errorData = await response.json();
            alert(`Failed to subscribe: ${errorData.error || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while subscribing. Please try again.");
    }
});
