// Задание-32
// Задача. Общий баланс пользователей

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => (acc += user.balance), 0);
};

console.log(calculateTotalBalance(users));
