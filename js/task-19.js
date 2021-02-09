// Задание-19
// Коллекция значений свойства

// Напиши функцию getAllPropValues(propName),
// которая принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем
// из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propValues = [];

  for (const product of products) {
    if (product[propName]) {
      propValues.push(product[propName]);
    }
  }

  return propValues;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('price'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('category'));
