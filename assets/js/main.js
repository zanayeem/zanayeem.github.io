/* Zannatun Nayeem — portfolio JS (vanilla ES6, no dependencies) */

(function () {
  'use strict';

  /* Mark body so CSS can safely animate [data-animate] elements.
     Without this, all content stays fully visible (no-JS / error fallback). */
  document.body.classList.add('js-ready');

  /* ── Sticky nav ─────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  /* ── Mobile hamburger ───────────────────────────────────────────────── */
  const toggle     = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });

  /* ── Active nav highlight on scroll ────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const activeSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => activeSectionObserver.observe(s));

  /* ── Scroll-triggered fade-in animations ───────────────────────────── */
  const animateObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animateObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    animateObserver.observe(el);
  });

  /* ── Typing animation ───────────────────────────────────────────────── */
  const roles = [
    'Senior DevOps Engineer',
    'Cloud & Platform Enthusiast',
    'CKA Certified',
  ];

  const typedEl = document.getElementById('typed');
  let   roleIdx = 0;
  let   charIdx = 0;
  let   deleting = false;

  function tick() {
    const current = roles[roleIdx];

    if (!deleting) {
      typedEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 70);
    } else {
      typedEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting  = false;
        roleIdx   = (roleIdx + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }

  setTimeout(tick, 900);

})();
