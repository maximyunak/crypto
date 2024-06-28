import '../scss/app.scss';

// Получаем элементы
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const navBg = document.querySelector('.nav-bg'); // Добавьте эту строку
const body = document.body;

// Обработчик клика по кнопке меню

function toggleActive(element) {
  element.classList.toggle('active');
}

menu.addEventListener('click', () => {
  toggleActive(menu);
  toggleActive(menuOverlay);
  toggleActive(navBg);
  toggleActive(body);
});

menuOverlay.addEventListener('click', () => {
  toggleActive(menu);
  toggleActive(menuOverlay);
  toggleActive(navBg);
  toggleActive(body);
});
