// Задание-27
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:
// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === 'starter') {
//  price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case 'starter':
      price = 0;

    case 'professional':
      price = 20;
      break;

    case 'organization':
      price = 50;
      break;
  }

  return price;
}

console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter'));
