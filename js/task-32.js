// Задание-32
// Функция includes()
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3)); // true
console.log(includes([1, 2, 3, 4, 5], 17)); // false
console.log(
  includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
); // true
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран')); // false
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива')); // true
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')); // false
