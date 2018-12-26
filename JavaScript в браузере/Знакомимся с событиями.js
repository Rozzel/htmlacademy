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