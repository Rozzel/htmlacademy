button.addEventListener('click', function () {
  console.log('Клик по кнопке');
});
// Сообщение выведется, когда произойдёт событие клика
//https://developer.mozilla.org/en-US/docs/Web/Events



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

document.addEventListener('keydown', function() {
  // Код отсюда выполнится при каждом нажатии любой клавиши
});

document.addEventListener('keydown', function(evt) {
  // Проверяем, что код клавиши равен 27
  if (evt.keyCode === 27) {
    // Код отсюда выполнится только при нажатии ESC
  }
});
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


// querySelectorAll

var updateCards = function (products) {
  var elements = document.querySelectorAll('.product');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(element);
    element.classList.add('product--available');    
  }

};

