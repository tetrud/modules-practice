// Задание-12
// Подсчёт свойств

// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;

  //return Object.keys(object).length
}

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
