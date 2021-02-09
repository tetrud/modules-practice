// Задание-12
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string = array.join(delimeter);

  return string;
}

console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_'));
