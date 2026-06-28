// app.js — XN Digital Studio Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // ── Hamburger ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger?.classList.remove('active');
    });
  });

  // ── Contact form ──
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value.trim();
    if (!name) return;
    contactForm.innerHTML = `
      <div class="success-state">
        <i class="fas fa-check-circle"></i>
        <h2>Message Sent!</h2>
        <p>Thanks, <strong>${name}</strong>! I'll get back to you within 24 hours.</p>
      </div>`;
  });

  // ── Skill bars animate on scroll ──
  const fills = document.querySelectorAll('.skill-fill');
  if (fills.length) {
    fills.forEach(el => {
      el.style.width = '0';
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.dataset.width;
          entry.target.style.transition = 'width 1s ease';
          entry.target.style.width = target;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(el => observer.observe(el));
  }
});

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 50);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}
