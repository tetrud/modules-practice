// Задание-7
// Метод call

//Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.
//Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
    position + 1
  }-й в очереди.`;
}

const messages = orders.map((order, index) =>
  composeMessage.call(order, index),
);

console.log(messages);
