// Задание-8
// Задача. Общие элементы 2.0

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.30

//function getCommonElements(firstArray, secondArray) {
//  const commonElements = [];

//  firstArray.forEach(function (element) {
//    if (secondArray.includes(element)) {
//      commonElements.push(element);
//    }
//  });

//  return commonElements;
//}

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
};
