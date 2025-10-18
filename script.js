document.getElementById('y').textContent = new Date().getFullYear();
(function () {
  const KEY = '201models.cookies.accepted';
  const wall = document.getElementById('cookie-wall');
  const btn  = document.getElementById('accept-cookies');
  function showWall(){ wall.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
  function hideWall(){ wall.classList.add('hidden'); document.body.style.overflow = ''; }
  if (localStorage.getItem(KEY) !== 'true') { showWall(); }
  btn?.addEventListener('click', ()=>{ localStorage.setItem(KEY,'true'); hideWall(); });
})();