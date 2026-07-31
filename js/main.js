/**
 * Main JavaScript for Portfolio Website
 * Handles scroll animations, smooth navigation, and interactive elements
 */

// ===========================================
// SCROLL ANIMATION OBSERVER
// ===========================================
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

// ===========================================
// SMOOTH SCROLL FOR NAVIGATION
// ===========================================
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// ===========================================
// STAT CARD NAVIGATION
// ===========================================
const initStatCardNavigation = () => {
    const experienceStatCard = document.querySelector('.stat-card.clickable');
    
    if (experienceStatCard) {
        experienceStatCard.addEventListener('click', () => {
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
                experienceSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
};

// ===========================================
// INITIALIZE ALL FEATURES
// ===========================================
const init = () => {
    initScrollAnimations();
    initSmoothScroll();
    initStatCardNavigation();
};

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
