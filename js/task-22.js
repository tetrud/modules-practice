// Задание-22
// Задача. Активные пользователи

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

import users from './users.js';

const getActiveUsers = users => {
  return users.filter(user => user.isActive);
};

console.log(getActiveUsers(users));
