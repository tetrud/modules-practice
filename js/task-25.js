// Задание-25

// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами,
// а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

//const highToday = forecast.today.high;
//const lowToday = forecast.today.low;
//const todayIcon = forecast.today.icon;

//const highTomorrow = forecast.tomorrow.high;
//const lowTomorrow = forecast.tomorrow.low;
//const tomorrowIcon = forecast.tomorrow.icon;

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(`lowToday: ${lowToday}`);
console.log(`highToday: ${highToday}`);
console.log(`todayIcon: ${todayIcon}`);
console.log(`lowTomorrow: ${lowTomorrow}`);
console.log(`highTomorrow: ${highTomorrow}`);
console.log(`tomorrowIcon: ${tomorrowIcon}`);
