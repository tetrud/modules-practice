// Задание-1
// Функция как значение

//Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}

const result = makePizza();
const pointer = makePizza;
