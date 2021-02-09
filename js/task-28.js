// Задание-28
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  //if (password === null) {
  //  message = 'Отменено пользователем!';
  //} else if (password === ADMIN_PASSWORD) {
  //  message = 'Добро пожаловать!';
  //} else {
  //  message = 'Доступ запрещён, неверный пароль!';
  //}

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;

    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещён, неверный пароль!';
  }

  return message;
}
