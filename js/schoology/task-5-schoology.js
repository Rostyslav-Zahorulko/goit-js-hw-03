// Задание 5

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// ***************************************************************************************************************************

// Алгоритм:

// 1. Создать функцию, записать ее в переменную

// 2. Объявить переменную arrayOfValues, присвоить ей значение []

// 3. Перебрать массив объектов в цикле

// 4. Если в объекте есть свойство, имя которого равно параметру функции prop,
//    запушить значение этого свойства в массив array

// 5. Вернуть массив значений в место вызова функции

// Решение:

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.table('Доступные товары:', products);

const getAllPropValues = function (arr, prop) {
  let arrayOfValues = [];

  for (const obj of arr) {
    console.log('Товар:', obj);

    console.log(prop in obj);

    if (prop in obj) {
      console.log(`Ключ ${prop} найден`);
      arrayOfValues.push(obj[prop]);
      console.log('Массив значений:', arrayOfValues);
    } else {
      console.log(`Ключ ${prop} не найден`);
    }
  }

  return arrayOfValues;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
