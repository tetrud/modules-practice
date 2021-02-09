// Задание-14
// Задача. Почты пользователей

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

import users from './users.js';

const getUserEmails = users => {
  return users.map(user => user.email);
};

console.log(getUserEmails(users));
