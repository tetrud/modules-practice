// Задание-29
// Задача. Есть ли активные пользователи

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

import users from './users.js';

const isAnyUserActive = users => {
  return users.some(user => user.isActive);
};

console.log(isAnyUserActive(users));
