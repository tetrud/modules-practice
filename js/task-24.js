// Задание-24

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit);
}

console.log(checkFruit('слива'));
console.log(checkFruit('мандарин'));
console.log(checkFruit('груша'));
console.log(checkFruit('Груша'));
console.log(checkFruit('яблоко'));
