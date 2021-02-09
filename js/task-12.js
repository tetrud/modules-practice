// Задание-12
// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const results = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `Вы заказали дроидов на сумму ${results} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
