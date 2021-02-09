// Задание-10
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}

console.log(splitMessage('Манго спешит на поезд', ' '));
console.log(splitMessage('Манго', ''));
console.log(splitMessage('лучшее_за_неделю', '_'));
