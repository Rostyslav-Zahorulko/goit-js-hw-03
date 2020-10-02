const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginUnique(allLogins, login) {
  for (const allLogin of allLogins) {
    if (allLogin === login) {
      console.log(`Пароли ${login} и ${allLogin} совпадают`);
      return false;
    } else {
      console.log(`Пароли ${login} и ${allLogin} не совпадают`);
    }
  }
  return true;
}

console.log(isLoginUnique(logins, 'Ajax'));

console.log(isLoginUnique(logins, 'robotGoogles'));

console.log(isLoginUnique(logins, 'Zod'));

console.log(isLoginUnique(logins, 'jqueryisextremelyfast'));
