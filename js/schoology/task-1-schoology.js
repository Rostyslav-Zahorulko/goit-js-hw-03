// Задание 1

// Напиши скрипт, который, для объекта user, последовательно:
// - добавляет поле mood со значением 'happy'
// - заменяет значение hobby на 'skydiving'
// - заменяет значение premium на false
// - выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
//
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// ***************************************************************************************************************************

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.table(user);

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
console.table(keys);

let message = '';

for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
