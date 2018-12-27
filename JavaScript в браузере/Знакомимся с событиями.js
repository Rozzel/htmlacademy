// Поиск элемента по тегу
var list = document.querySelector('ul');

// Поиск последнего элемента из списка
var lastProduct = document.querySelector('li:last-child');

// Поиск элемента по классу
var price = document.querySelector('.price');


// Когда ищем элемент по классу, используем точку
var product = document.querySelector('.product');

// Но когда добавляем класс, точки нет!
product.classList.add('product--sale');

var button = document.querySelector('.button');

button.addEventListener('click', function () {
  // Инструкции
});

var popup = document.querySelector('.modal');

/*
https://developer.mozilla.org/en-US/docs/Web/Events

*/

link.addEventListener('click', function(evt) {
  // Отменяем действие по умолчанию
  evt.preventDefault();

  // Добавляем инструкции для события клика
  console.log('Произошёл клик');
});

var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');

openPopupButton.addEventListener('click', function (evt) {
  
  evt.preventDefault();
  console.log('Клик по кнопке');
});

var popup = document.querySelector('.popup');
// Перед названием селектора ставим точку

popup.classList.remove('popup--open');
// Перед названием класса точка не ставится