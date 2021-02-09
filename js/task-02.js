// Задание-2
// Проверка пароля (ранний возврат)

// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

//==============================================

//function checkPassword(password) {
//  const ADMIN_PASSWORD = 'jqueryismyjam';
//  let message;

//  if (password === ADMIN_PASSWORD) {
//    message = 'Добро пожаловать!';
//  } else {
//    message = 'Доступ запрещен, неверный пароль!';
//  }

//  return message;
//}

//==============================================

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }

  return 'Доступ запрещен, неверный пароль!';
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));
