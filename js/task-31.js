// Задание-31
// Операция rest для сбора всех аргументов функции

// Используя операцию rest дополни код функции add() так,
// чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.

function add(...args) {
  let sumArgs = 0;

  for (let i = 0; i < args.length; i++) {
    sumArgs += args[i];
  }

  return sumArgs;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
