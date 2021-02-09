// Задание-18
// Задача. Пользователи с цветом глаз

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.table(getUsersWithEyeColor(users, 'blue'));
console.table(getUsersWithEyeColor(users, 'green'));
console.table(getUsersWithEyeColor(users, 'brown'));
