// ハンバーガーメニュー制御
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // メニューが開いている場合は×ボタンを表示、閉じている場合は非表示
  if (navMenu.classList.contains('open')) {
    closeMenu.style.display = 'block';
  } else {
    closeMenu.style.display = 'none';
  }
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('open');
  closeMenu.style.display = 'none';
});
