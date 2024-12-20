// main.js

// Header scroll effect
const handleHeaderScroll = () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Smooth scroll functionality
const smoothScrollTo = (targetId, offset = 200) => {
    const target = document.getElementById(targetId);
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
};

// Mobile menu toggle
const initMobileMenu = () => {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
};

// Initialize scroll event listeners
const initScrollEvents = () => {
    const scrollButtons = [
        { btnId: 'btnMajor', targetId: 'aboutme' },
        { btnId: 'btnMinor', targetId: 'followme' },
        { btnId: 'navWhoBtn', targetId: 'aboutme' },
        { btnId: 'navFlwBtn', targetId: 'followme' },
        { btnId: 'navLogo', targetId: 'Landing' }
    ];

    document.addEventListener("DOMContentLoaded", () => {
        scrollButtons.forEach(({ btnId, targetId }) => {
            const button = document.getElementById(btnId);
            if (button) {
                button.addEventListener('click', () => smoothScrollTo(targetId));
            }
        });
    });
};

// Initialize all functionality
const initializeApp = () => {
    handleHeaderScroll();
    initMobileMenu();
    initScrollEvents();
};

// Start the application
initializeApp();