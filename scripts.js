// scripts.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Hover effect for sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'box-shadow 0.3s ease-in-out';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'box-shadow 0.3s ease-in-out';
        });
    });
});

