// Задание-38
// Задача. Сортировка по балансу

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

import users from './users.js';

const sortByAscendingBalance = users => {
  return users.sort((prev, next) => prev.balance - next.balance);
};

console.log(sortByAscendingBalance(users));
