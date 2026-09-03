/* ============================================================
   Alpha Solex LLP — interactions
   ============================================================ */
(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header state + back-to-top visibility
  var header = document.getElementById('site-header');
  var toTop = document.getElementById('to-top');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('is-scrolled', y > 20);
    if (toTop) toTop.classList.toggle('show', y >= 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var iconOpen = document.getElementById('icon-open');
  var iconClose = document.getElementById('icon-close');

  function closeMenu() {
    if (!menu) return;
    menu.classList.add('hidden');
    if (iconOpen) iconOpen.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isHidden = menu.classList.toggle('hidden');
      if (iconOpen) iconOpen.classList.toggle('hidden', !isHidden);
      if (iconClose) iconClose.classList.toggle('hidden', isHidden);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Reveal-on-scroll for major sections
  var revealEls = document.querySelectorAll(
    'section > div > .mx-auto, .process-step, .team-card, .why-card, article'
  );
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // Enquiry form — client-side validation + local demo submit
  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name');
      var phone = form.querySelector('#phone');
      var email = form.querySelector('#email');
      var valid = true;

      [name, phone].forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('invalid');
          valid = false;
        } else {
          field.classList.remove('invalid');
        }
      });

      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.classList.add('invalid');
        valid = false;
      } else {
        email.classList.remove('invalid');
      }

      if (!valid) {
        showStatus('Please fill in your name and phone number correctly.', false);
        return;
      }

      // No backend in this static build — show a confirmation.
      showStatus(
        'Thank you, ' + name.value.trim() + '! Your enquiry has been recorded. ' +
        'Our team will reach out at ' + phone.value.trim() + ' shortly.',
        true
      );
      form.reset();
    });
  }

  function showStatus(msg, ok) {
    if (!status) return;
    status.textContent = msg;
    status.classList.remove('hidden');
    status.style.background = ok ? '#ecfdf5' : '#fef2f2';
    status.style.color = ok ? '#1f7a33' : '#b91c1c';
  }
})();
