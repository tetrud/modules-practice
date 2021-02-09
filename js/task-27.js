// Задание-27
// Фильтрация массива чисел 2.0

// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

//===============================================

//function filterArray(numbers, value) {
//  const filteredNumbers = [];

//  for (let i = 0; i < numbers.length; i += 1) {
//    const number = numbers[i];

//    if (number > value) {
//      filteredNumbers.push(number);
//    }
//  }

//  return filteredNumbers;

//}

//===============================================

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    const numb = number;

    if (numb > value) {
      filteredNumbers.push(numb);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
