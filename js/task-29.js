// Задание-29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
  let evenNumber = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    }
  }

  return evenNumber;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
