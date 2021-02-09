// Задание-9
// Чистые функции

//function changeEven(numbers, value) {
//  for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] % 2 === 0) {
//      numbers[i] = numbers[i] + value;
//    }
//  }
//}

function changeEven(numbers, value) {
const newNumbers = []

numbers.forEach(number => {
    if (number % 2 === 0) {
    number += value;
    }
   newNumbers.push(number)
  })
  return newNumbers
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));