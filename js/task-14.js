// Задание-14
// Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`. Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;

  return isMatch;
}

console.log(isValidPassword('mangodab3st')); // false
console.log(isValidPassword('kiwirul3z')); // false
console.log(isValidPassword('jqueryismyjam')); // true
