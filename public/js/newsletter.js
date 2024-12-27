document.getElementById('newsletter-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const email = e.target.email.value; // Get the email value from the form
    
    const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the email in the request body
    });

    if (response.ok) {
        alert('Successfully subscribed!');
    } else {
        alert('Error subscribing!');
    }
});