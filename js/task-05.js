// Задание-5
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов. Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

const productName = 'Дроид';
const pricePerItem = 3500;

const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов.`;
console.log(message);
