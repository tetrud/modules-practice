// Задание-6
// Стрелочные функции как коллбеки

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

//function calculateTotalPrice(orderedItems) {
//  let totalPrice = 0;

//  orderedItems.forEach(function (item) {
//    totalPrice += item;
//  });

//  return totalPrice;
//}

const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};
