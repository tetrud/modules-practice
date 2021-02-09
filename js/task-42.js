// Задание-42
// Задача. Пользователи и друзья

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

import users from './users.js';

const getNamesSortedByFriendCount = users => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendCount(users));
