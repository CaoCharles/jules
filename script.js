/**
 * Handles client-side interactivity for the tech static page.
 * - Smooth scrolling for navigation links.
 * - Active navigation link highlighting based on scroll position.
 */
document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    const headerElement = document.querySelector('header');
    const headerHeight = headerElement ? headerElement.offsetHeight : 70; // Fallback header height

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => { // Changed to arrow function
            event.preventDefault();
            const targetId = link.getAttribute('href'); // 'this' would be different in arrow function, so use 'link'
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Optional: Immediately set active class on click, though scroll handler will also do it.
                // updateActiveNavLink(targetId);
            }
        });
    });

    // --- Active Navigation Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section');

    /**
     * Updates the active state of navigation links based on the current scroll position.
     */
    const updateActiveNavLink = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            // Adjust sectionTop to be more accurate for when a section is considered "in view"
            const sectionTop = section.offsetTop - headerHeight - 50; // Added offset for better UX
            if (scrollPosition >= sectionTop) {
                currentSectionId = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });

        // Special case: If scrolled to the very top, or above the first section,
        // and no other section is active, highlight the 'home' link.
        const firstSectionTop = sections.length > 0 ? sections[0].offsetTop - headerHeight - 50 : 0;
        if (scrollPosition < firstSectionTop && (currentSectionId === '' || currentSectionId === '#home')) {
            const homeLink = document.querySelector('nav ul li a[href="#home"]');
            if (homeLink && !homeLink.classList.contains('active')) {
                 // Ensure other links are inactive if home is forced active here
                navLinks.forEach(l => l.classList.remove('active'));
                if (homeLink) homeLink.classList.add('active');
            }
        } else if (currentSectionId === '') {
            // If no section is matched (e.g., scrolled past the last section, or in a gap)
            // and not at the very top, potentially remove all active classes or default to first.
            // For now, if #home is the first link and nothing else matches, it might remain from previous logic.
            // This ensures if we are between sections or at the bottom, the last active link might persist,
            // or we could explicitly clear all if no section is truly "current".
            // Current behavior: last matched section remains active. If scrolled below all, last one stays.
            // If scrolled to top, #home is prioritized.
        }
    };

    // Event listeners for scroll and initial load
    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('load', () => {
        updateActiveNavLink(); // Initial check on page load
        // Ensure headerHeight is correctly calculated after everything is loaded, if dynamic
        // headerHeight = headerElement ? headerElement.offsetHeight : 70;
    });

    // --- Future Enhancements Placeholder ---
    // Example: Intersection Observer for animations on scroll
    /*
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Optional: Animate only once
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    animatedElements.forEach(el => observer.observe(el));
    */

    // Example: Basic form submission handling (preventDefault and log for now)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            // Here you would typically send the data to a backend or a service
            alert('訊息已收到！(此為前端演示)');
            contactForm.reset();
        });
    }
});
