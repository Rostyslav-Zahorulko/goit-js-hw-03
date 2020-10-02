// Задача 3-6

// Суммирование значений свойства из массива объектов

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// // calculateTotalPrice(products, 'Радар'));
// // 9080

// // calculateTotalPrice(products, 'Сканер')); // 10200

// // calculateTotalPrice(products, 'Захват')); // 2400

// // calculateTotalPrice(products, 'Дроид')); // 2800

// ***************************************************************************************************************************

// Алгоритм:

// 1. Создать функцию, записать ее в переменную

// 2. Объявить переменную totalPrice, присвоить ей значение 0

// 3. Перебрать массив объектов в цикле

// 4. На каждой итерации проверить, имеет ли объект свойство, значение которого равно параметру prop функции.
//    Если имеет, посчитать общую стоимость товара, добавить ее к значению переменной totalPrice.
//    Если не имеет, переходить на слудующую итерацию

// 5. После окончания цикла вывести общую стоимость товара в место вызова функции.

// Решение:

function calculateTotalPrice(array, prop) {
  'use strict';
  console.log('Доступные товары:', array);

  let totalPrice = 0;

  for (const obj of array) {
    console.log('Товар, который смотрим:', obj);

    if (obj['name'] === prop) {
      console.log(`Нужный товар "${prop}" найден. Считаю его общую стоимость`);

      totalPrice += obj['price'] * obj['quantity'];
      console.log(`Общая стоимость товара "${obj['name']}":`, totalPrice);
    } else {
      console.log(`Нужный товар "${prop}" не найден. Нечего считать`);
    }
  }

  return totalPrice;
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

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
