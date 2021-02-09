// Задание-35
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

console.log(checkForName('Егор Колбасов', 'Егор'));
console.log(checkForName('Егор Колбасов', 'егор'));
console.log(checkForName('Егор Колбасов', 'егОр'));
console.log(checkForName('Егор Колбасов', 'Женя'));
console.log(checkForName('Вадим Некрасов', 'Вадим'));
console.log(checkForName('Егор Колбасов', 'вадим'));
console.log(checkForName('Егор Колбасов', 'Дима'));
