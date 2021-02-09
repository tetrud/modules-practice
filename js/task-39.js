// Задание-39
// Задача. Сортировка по количеству друзей

//Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

import users from './users.js';

const sortByDescendingFriendCount = users => {
  return [...users].sort(
    (prev, next) => next.friends.length - prev.friends.length,
  );
};

console.log(sortByDescendingFriendCount(users));
