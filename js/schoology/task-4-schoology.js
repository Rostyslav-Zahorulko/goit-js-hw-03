// Задание 4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// const countTotalSalary = function(employees) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// ***************************************************************************************************************************

const countTotalSalary = function (employees) {
  console.log('Объект работников:', employees);

  const employeesSalary = Object.values(employees);
  console.log('Массив зарплат работников:', employeesSalary);

  let totalSalary = 0;

  for (const employeeSalary of employeesSalary) {
    console.log('Зарплата работника:', employeeSalary);

    totalSalary += employeeSalary;
    console.log('Зарплата всех работников:', totalSalary);
  }

  return totalSalary;
};

// console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
