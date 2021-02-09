// Задание-27
// Задача. Все ли пользователи активны

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

import users from './users.js';

const isEveryUserActive = users => {
  return users.every(user => user.isActive);
};
console.log(isEveryUserActive(users));
