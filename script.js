// JavaScript code for the website

// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on mobile devices
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close navigation menu when a menu item is clicked (for mobile)
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
