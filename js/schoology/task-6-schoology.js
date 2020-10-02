// Задание 6

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ***************************************************************************************************************************

// Алгоритм:

// 1. Создать функцию, записать ее в переменную

// 2. Перебрать массив объектов в цикле

// 3. Если в объекте есть свойство, значение которого равно параметру функции productName,
//    посчитать общую стоимость этого товара и записать ее в переменную totalPrice

// 4. Вернуть общую стоимость товара в место вызова функции

// Решение:

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log('Доступные товары:', products);

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    console.log('Товар:', product);

    if (product.name === productName) {
      console.log(`Товар "${productName}" найден`);

      let totalPrice = product.price * product.quantity;
      console.log(
        `За ${product.quantity} единицы товара "${product.name}" нужно заплатить ${totalPrice}`,
      );

      return totalPrice;
    } else {
      console.log(`Товар "${productName}" не найден`);
    }
  }
  return 'К сожалению, товара найти не удалось';
};

console.log(calculateTotalPrice(products, 'Сканер')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
