document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Add logic to handle form submission (e.g., sending an email or saving to a database)
    alert("Form submitted! (Note: This is a placeholder. Actual functionality needs to be implemented.)");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

