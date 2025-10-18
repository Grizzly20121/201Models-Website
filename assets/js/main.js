// Scroll progress
const progress = document.getElementById('progress');
addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
  progress.style.width = (scrolled * 100) + '%';
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll (simple)
const reveal = (el) => {
  el.style.opacity = 0; el.style.transform = 'translateY(6px)';
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        el.style.opacity = 1; el.style.transform = 'translateY(0)';
        io.disconnect();
      }
    });
  }, {threshold:.15});
  io.observe(el);
};
document.querySelectorAll('.section .container, .hero-inner').forEach(reveal);

// Modal zoom
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCap = document.getElementById('modal-cap');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.work-card .frame img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    const title = img.closest('.work-card').dataset.title || '';
    modalCap.textContent = title;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }
});
