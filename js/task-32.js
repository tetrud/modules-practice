// Задание-32
// Операция rest для сбора части аргументов функции

// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.
// Это число должно быть первым параметром функции.

function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (num < arg) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
