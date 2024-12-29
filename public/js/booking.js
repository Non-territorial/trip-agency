document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("book-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const trip = e.target.trip.value;
            const guests = e.target.guests.value;
            const message = e.target.message.value || null;

            try {
                const response = await fetch("/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, trip, guests, message }),
                });

                if (response.ok) {
                    alert("Booking inquiry submitted successfully!");
                } else {
                    const errorData = await response.json();
                    alert(`Failed to submit booking inquiry: ${errorData.error || "Unknown error"}`);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while submitting your booking inquiry. Please try again.");
            }
        });
    }
});
