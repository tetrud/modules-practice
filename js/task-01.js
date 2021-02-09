// Задание-1
// Запиши условие в инструкции if так, чтобы функция работала правильно.

function checkAge(age) {
  if (age >= 18) {
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));
