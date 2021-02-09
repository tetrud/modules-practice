// Задание-19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits. ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));
