// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// cookie banner (no tracking; only stores a flag in localStorage)
const cookie = document.getElementById('cookie');
const accept = document.getElementById('cookie-accept');
if(!localStorage.getItem('cookieAccepted')) cookie.style.display = 'block';
accept?.addEventListener('click', () => {
  localStorage.setItem('cookieAccepted', '1');
  cookie.style.display = 'none';
});

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  })
},{threshold:.22});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
