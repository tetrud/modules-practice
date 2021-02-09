// Задание-25
// Задача. Пользователь с почтой

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

import users from './users.js';

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
