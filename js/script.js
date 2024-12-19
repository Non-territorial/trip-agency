document.addEventListener('DOMContentLoaded', () => {
    const horizontalSections = document.querySelectorAll('.horizontal-section');

    horizontalSections.forEach((section) => {
        const container = section.querySelector('.horizontal-container');
        
        // Listen for vertical scroll events in the horizontal section
        section.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault(); // Prevent vertical scroll
                container.scrollLeft += e.deltaY; // Scroll horizontally
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.querySelector(".menu-trigger");
    const menuContent = document.querySelector(".menu-content");

    trigger.addEventListener("click", () => {
        menuContent.style.display =
            menuContent.style.display === "flex" ? "none" : "flex";
    });
});
