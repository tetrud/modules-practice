// Задание-21
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.tWord('May the force be with you'));

//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;
