// Задание-13
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};

const values = [];

const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(values);
