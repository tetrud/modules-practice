// Задание-7
// Задача. Фильтрация массива чисел 2.0

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

//function filterArray(numbers, value) {
//  const filteredNumbers = [];

//  numbers.forEach(function (number) {
//    if (number > value) {
//      filteredNumbers.push(number);
//    }
//  });

//  return filteredNumbers;
//}

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
