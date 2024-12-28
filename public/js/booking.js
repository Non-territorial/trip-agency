document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById('book-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const trip = e.target.trip.value;
            const guests = e.target.guests.value;
            const message = e.target.message.value || null;

            // Use the environment variable
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
            const endpoint = `${apiBaseUrl}/api/bookings`;

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, trip, guests, message }),
                });

                if (response.ok) {
                    alert('Booking inquiry submitted successfully!');
                } else {
                    const error = await response.json();
                    alert('Error submitting booking inquiry: ' + (error.message || 'Unknown error'));
                }
            } catch (err) {
                alert('A network error occurred while submitting the booking inquiry!');
            }
        });
    }
});
