// Задача 3-4

// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees), принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// ***************************************************************************************************************************

// 1. Создать из значений свойств объекта массив, записать его в переменную

// 2. Создать переменную totalSalary со значением 0

// 3. Перебрать массив в цикле

// 4. На каждой иттерации цикла добавить значение свойства к значению переменной totalSalary

// 5. Вывести значение переменной totalSalary на место вызова функции

const countTotalSalary = function (employees) {
  'use strict';
  console.log('Объект работников:', employees);

  const employeesSalary = Object.values(employees);
  console.log('Массив зарплат работников:', employeesSalary);

  let totalSalary = 0;

  for (const employeeSalary of employeesSalary) {
    console.log('Зарплата работника:', employeeSalary);

    totalSalary += employeeSalary;
    console.log('Сумма зарплат работников:', totalSalary);
  }

  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
