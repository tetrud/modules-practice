// Задание-40
// Задача. Сортировка по имени

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

import users from './users.js';

const sortByName = users => {
  return [...users].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name),
  );
};

console.log(sortByName(users));
