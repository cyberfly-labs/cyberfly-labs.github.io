console.log('Cyberfly Labs loaded');

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('bg-gray-950/80', 'backdrop-blur-lg', 'border-b', 'border-white/10');
  } else {
    header.classList.remove('bg-gray-950/80', 'backdrop-blur-lg', 'border-b', 'border-white/10');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle mobile menu
    if (isExpanded) {
      mobileNav.classList.add('-right-full');
      mobileNav.classList.remove('right-0');
    } else {
      mobileNav.classList.remove('-right-full');
      mobileNav.classList.add('right-0');
    }
    
    // Animate hamburger
    const hamburger = mobileMenuBtn.querySelector('.hamburger');
    const spans = hamburger.querySelectorAll('span');
    if (!isExpanded) {
      hamburger.classList.add('bg-transparent');
      spans[0].classList.add('rotate-45', 'top-0');
      spans[0].classList.remove('-top-2');
      spans[1].classList.add('-rotate-45', 'top-0');
      spans[1].classList.remove('top-2');
    } else {
      hamburger.classList.remove('bg-transparent');
      spans[0].classList.remove('rotate-45', 'top-0');
      spans[0].classList.add('-top-2');
      spans[1].classList.remove('-rotate-45', 'top-0');
      spans[1].classList.add('top-2');
    }
  });

  // Close menu when clicking on a nav item
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.add('-right-full');
      mobileNav.classList.remove('right-0');
      
      const hamburger = mobileMenuBtn.querySelector('.hamburger');
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.remove('bg-transparent');
      spans[0].classList.remove('rotate-45', 'top-0');
      spans[0].classList.add('-top-2');
      spans[1].classList.remove('-rotate-45', 'top-0');
      spans[1].classList.add('top-2');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.add('-right-full');
      mobileNav.classList.remove('right-0');
      
      const hamburger = mobileMenuBtn.querySelector('.hamburger');
      const spans = hamburger.querySelectorAll('span');
      hamburger.classList.remove('bg-transparent');
      spans[0].classList.remove('rotate-45', 'top-0');
      spans[0].classList.add('-top-2');
      spans[1].classList.remove('-rotate-45', 'top-0');
      spans[1].classList.add('top-2');
    }
  });
}

// Smooth scroll for anchor links (Tailwind already handles this with scroll-smooth class)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe product cards when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    observer.observe(card);
  });
});
