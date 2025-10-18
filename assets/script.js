// progress bar
const progress = document.getElementById('progress');
document.addEventListener('scroll', () => {
  const sc = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${Math.min(sc / max, 1)})`;
});
// reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// year
document.getElementById('year').textContent = new Date().getFullYear();
