// Задание=16
// Композиция массивов

// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}

console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));
