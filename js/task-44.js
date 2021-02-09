// Задание-44
// Задача. Общий баланс

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

import users from './users.js';

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((acc, user) => (acc += user.balance), 0);
};

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));
