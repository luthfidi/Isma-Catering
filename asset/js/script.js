document.addEventListener('DOMContentLoaded', function() {
    // Essential navbar functionality
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Simple scroll handler
    window.addEventListener('scroll', function() {
        // Add/remove scrolled class for navbar
        if (window.scrollY  > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (window.scrollY  > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Image Loading Animation
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Menu Category Tabs Animation
    const menuTabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    menuTabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(e) {
            const target = document.querySelector(e.target.getAttribute('data-bs-target'));
            const items = target.querySelectorAll('.menu-card');
            
            items.forEach((item, index) => {
                item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
            });
        });
    });

    // WhatsApp Button Click Handler
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const menuItem = this.getAttribute('data-menu');
            const phoneNumber = '1234567890'; // Replace with actual number
            const message = `Halo, saya ingin memesan ${menuItem}`;
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Add Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 50 && elementBottom > 0) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Carousel Auto Slide with Pause on Hover
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000
        });
    }

    // Form Validation (if contact form exists)
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                // Handle form submission
                // Add your form submission logic here
                alert('Pesan telah terkirim! Kami akan segera menghubungi Anda.');
                this.reset();
            }
        });
    }

    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });

    // Add custom animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }

        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }

        img.loaded {
            animation: fadeIn 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});