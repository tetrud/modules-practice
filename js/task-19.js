// Задание-19
// Задача. Пользователи в возрастной категории

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

import users from './users.js';

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));
console.table(getUsersWithAge(users, 80, 100));
