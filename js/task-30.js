// Задание-30
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной сроки из параметра name.

function getNameLength(name) {
  return `Длина вашего имени ${name.length} символа(ов)`;
}

console.log(getNameLength('Poly'));
console.log(getNameLength('Harambe'));
console.log(getNameLength('Billy'));
console.log(getNameLength('Joe'));
