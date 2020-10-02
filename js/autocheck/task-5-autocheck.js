// Задача 3 - 5

// Оператор in и метод push

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// ***************************************************************************************************************************

// Алгоритм:

// 1. Создать функцию, присвоить ее переменной

// 2. Создать переменную arrayOfValues, присвоить ей значение []

// 3. Перебрать массив обьектов в цикле

// 4. На каждой итерации, если объект имеет свойство, ключ которого равен параметру prop функции,
//    запушить значение этого свойства в массив arrayOfValues

// 5. После завершения цикла вывести значение переменной arrayOfValues в место вызова функции

// Решение:

function getAllPropValues(array, prop) {
  'use strict';
  console.log('Товары:', array);

  const arrayOfValues = [];

  for (const obj of array) {
    console.log('Товар:', obj);

    if (prop in obj) {
      console.log(
        `Свойство с ключем ${prop} найдено. Записываю значение свойства в массив`,
      );

      arrayOfValues.push(obj[prop]);
      console.log('Массив значений свойств:', arrayOfValues);
    } else {
      console.log(
        `Свойство с ключем ${prop} не найдено. Нечего записывать в массив значений`,
      );
    }
  }

  return arrayOfValues;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
// []
