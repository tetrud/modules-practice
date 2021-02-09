// Задание-43
// Задача. Имена друзей

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

import users from './users.js';

const getSortedFriends = users => {
  return [...users]
    .flatMap(user => user.friends)
    .filter((name, index, array) => array.indexOf(name) === index)
    .sort();
};

console.log(getSortedFriends(users));
