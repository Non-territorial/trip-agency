document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            
            const email = e.target.email.value; // Get the email value from the form

            // Use the environment variable or fallback to localhost:3001
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
            const endpoint = `${apiBaseUrl}/api/subscribe`;

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }), // Send the email in the request body
                });

                if (response.ok) {
                    // Handle successful subscription
                    const result = await response.json();
                    alert('Successfully subscribed! Thank you.');
                    console.log('Subscription response:', result); // Optional: Debug the response
                } else {
                    // Handle server errors
                    const error = await response.json();
                    console.error('Error response:', error);
                    alert(`Error subscribing: ${error.message || 'Unknown error occurred.'}`);
                }
            } catch (err) {
                // Handle network errors
                console.error('Network error:', err);
                alert('A network error occurred. Please try again later.');
            }
        });
    }
});
