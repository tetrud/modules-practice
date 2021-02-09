// Задание-14
// Подсчёт свойств 2.0

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
