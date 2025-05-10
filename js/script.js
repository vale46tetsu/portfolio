// ハンバーガーメニュー制御
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

// 初期状態で×ボタンを非表示
closeMenu.style.display = 'none';

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // メニューが開いている場合は×ボタンを表示
  if (navMenu.classList.contains('open')) {
    closeMenu.style.display = 'block';
  } else {
    closeMenu.style.display = 'none';
  }
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('open');
  // メニューを閉じたら×ボタンも非表示に
  closeMenu.style.display = 'none';
});
