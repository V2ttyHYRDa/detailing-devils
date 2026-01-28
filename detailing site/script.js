// ==========================================
// DETAIL SUDS - INTERACTIVE BEHAVIORS
// Modern Eco-Tech Experience - 2026
// ==========================================

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.navbar__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================
// SHOWCASE SLIDER
// ==========================================
const showcaseTrack = document.getElementById('showcaseTrack');
const showcasePrev = document.getElementById('showcasePrev');
const showcaseNext = document.getElementById('showcaseNext');

if (showcaseTrack && showcasePrev && showcaseNext) {
    let currentSlide = 0;
    const slides = showcaseTrack.querySelectorAll('.showcase__slide');
    const totalSlides = slides.length;

    function updateSlider() {
        const translateX = -currentSlide * 100;
        showcaseTrack.style.transform = `translateX(${translateX}%)`;
    }

    showcaseNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    showcasePrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    showcaseTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    showcaseTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                currentSlide = (currentSlide + 1) % totalSlides;
            } else {
                // Swipe right - previous slide
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            }
            updateSlider();
        }
    }
}

// ==========================================
// FAQ ACCORDION
// ==========================================
const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        const answer = question.nextElementSibling;
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.setAttribute('aria-expanded', 'false');
                const otherAnswer = q.nextElementSibling;
                otherAnswer.style.maxHeight = '0';
            }
        });
        
        // Toggle current FAQ
        if (isExpanded) {
            question.setAttribute('aria-expanded', 'false');
            answer.style.maxHeight = '0';
        } else {
            question.setAttribute('aria-expanded', 'true');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ==========================================
// HERO PLAY BUTTON
// ==========================================
const heroPlayBtn = document.querySelector('.hero__play-btn');

if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
        // Placeholder for video modal or YouTube embed
        // You can implement a lightbox or modal here
        alert('Video showcase coming soon! For now, visit our Instagram @detailsudslko to see our work.');
        
        // Example: Open Instagram in new tab
        // window.open('https://www.instagram.com/detailsudslko', '_blank');
    });
}

// ==========================================
// SMOOTH SCROLL OFFSET FOR STICKY NAVBAR
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Observe FAQ items
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease-out ${index * 0.08}s`;
    observer.observe(item);
});

// ==========================================
// FORM VALIDATION & SUBMISSION
// ==========================================
const quoteForm = document.querySelector('.footer__form');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        // Basic validation is handled by HTML5 attributes
        // Add custom validation or analytics here if needed
        
        // Example: Track form submission
        console.log('Quote form submitted');
        
        // If using Formspree or similar service, form will submit normally
        // If you want to handle it with JavaScript:
        // e.preventDefault();
        // const formData = new FormData(quoteForm);
        // // Send via fetch API to your backend
    });
}

// ==========================================
// LAZY LOADING IMAGES (Native + Fallback)
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// PERFORMANCE: PRELOAD CRITICAL ASSETS
// ==========================================
window.addEventListener('load', () => {
    // Mark first contentful paint
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.name === 'first-contentful-paint') {
                    console.log('FCP:', entry.startTime);
                }
            }
        });
        observer.observe({ entryTypes: ['paint'] });
    }
});

// ==========================================
// WHATSAPP CTA TRACKING
// ==========================================
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Track WhatsApp click event
        console.log('WhatsApp CTA clicked');
        
        // Example: Google Analytics event
        // gtag('event', 'click', {
        //     'event_category': 'CTA',
        //     'event_label': 'WhatsApp Button'
        // });
    });
});

// ==========================================
// CURSOR TRAIL EFFECT (OPTIONAL ENHANCEMENT)
// ==========================================
// Uncomment if you want a premium cursor trail effect
/*
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(212, 175, 55, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            z-index: 9999;
            transform: translate(-50%, -50%);
        `;
        
        trail.appendChild(dot);
        
        setTimeout(() => {
            dot.remove();
        }, 500);
    });
};

// Activate only on desktop
if (window.innerWidth > 1024) {
    createCursorTrail();
}
*/

// ==========================================
// ANALYTICS & CONSOLE SIGNATURE
// ==========================================
console.log(
    '%c🚗 Detail Suds - Premium Car Detailing',
    'font-size: 16px; font-weight: bold; color: #D4AF37;'
);
console.log(
    '%cWebsite crafted with Modern Eco-Tech design system',
    'font-size: 12px; color: #888;'
);
console.log(
    '%c📱 Book your appointment: wa.me/917007371918',
    'font-size: 12px; color: #25D366;'
);
