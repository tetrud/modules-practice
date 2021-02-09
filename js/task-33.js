// Задание-33. Массив совпадений

// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел,
// а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго,
// которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

function findMatches(array, ...args) {
  const matches = [];

  for (const item of args) {
    for (const arr of array) {
      if (item === arr) {
        matches.push(arr);
      }
    }
  }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
