// ===== ハンバーガーメニュー制御 =====
const burger   = document.getElementById('burger');
const navMenu  = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
