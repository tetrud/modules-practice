// Задание-13
// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
  const passed = age >= 18;

  return passed;
}

console.log(isAdult(20)); // true
console.log(isAdult(14)); // false
console.log(isAdult(8)); //false
console.log(isAdult(37)); // true
