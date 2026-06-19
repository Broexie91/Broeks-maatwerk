// =========================================
// BROEKS MAATWERK — Main JavaScript
// =========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Mobile Navigation Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navInner  = document.getElementById('nav-inner');

  if (navToggle && navInner) {
    navToggle.addEventListener('click', () => {
      navInner.classList.toggle('menu-open');
      const isOpen = navInner.classList.contains('menu-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.innerHTML = isOpen
        ? '<span style="transform:rotate(45deg) translate(5px,5px)"></span><span style="opacity:0"></span><span style="transform:rotate(-45deg) translate(5px,-5px)"></span>'
        : '<span></span><span></span><span></span>';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navInner.classList.remove('menu-open');
        navToggle.innerHTML = '<span></span><span></span><span></span>';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navInner.contains(e.target)) {
        navInner.classList.remove('menu-open');
        navToggle.innerHTML = '<span></span><span></span><span></span>';
      }
    });
  }

  // --- 2. Active nav link detection ---
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (
      linkPath === currentPath ||
      (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
      (linkPath.endsWith('/') && linkPath.slice(0, -1) === currentPath)
    ) {
      link.classList.add('active');
    }
  });

  // --- 3. Scroll-reveal animation ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // --- 4. Navbar scroll effect ---
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        siteNav.style.background = 'rgba(28, 20, 16, 0.98)';
        siteNav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
      } else {
        siteNav.style.background = 'rgba(61, 43, 31, 0.97)';
        siteNav.style.boxShadow = 'none';
      }
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- 5. Animated counters (for stat numbers) ---
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1800;
          const start = performance.now();

          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out
            el.textContent = Math.round(target * ease) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };

          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // --- 6. Contact form submission handler ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Verzenden...';

      // Simulate sending (replace with actual backend call)
      setTimeout(() => {
        submitBtn.textContent = '✓ Bericht verzonden!';
        submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

});
