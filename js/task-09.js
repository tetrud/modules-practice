// Задание-9

//Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  array = [array[0], array[array.length - 1]];

  return array;
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));
