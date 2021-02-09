// Задание-13
// Задача. Имена пользователей

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

import users from './users.js';

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
