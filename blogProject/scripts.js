// JavaScript for Blog Website

// Function to dynamically set the current year in the footer
function setYear() {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
}

// Function for smooth scrolling to anchors
function smoothScroll() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                
                const hash = this.hash;
                
                window.scroll({
                    top: document.querySelector(hash).offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functions when the document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    setYear();
    smoothScroll();
});
