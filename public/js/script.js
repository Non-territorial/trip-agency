document.addEventListener("DOMContentLoaded", () => {
    // Menu toggle functionality
    const trigger = document.querySelector(".menu-trigger");
    const menuContent = document.querySelector(".menu-content");

    if (trigger && menuContent) {
        trigger.addEventListener("click", () => {
            menuContent.style.display =
                menuContent.style.display === "flex" ? "none" : "flex";
        });

        document.addEventListener("click", (event) => {
            if (!menuContent.contains(event.target) && !trigger.contains(event.target)) {
                menuContent.style.display = "none";
            }
        });
    }

    // Select all dropdown toggles
const toggles = document.querySelectorAll('.dropdown-toggle');

// Add event listener to each toggle
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Toggle visibility of the next sibling (info-item-content)
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('span');
        
        // Show/hide the content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        
        // Change the icon between > and v
        if (content.style.display === 'block') {
            icon.textContent = 'v'; // Open state
        } else {
            icon.textContent = '>'; // Closed state
        }
    });
});



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

    

});
