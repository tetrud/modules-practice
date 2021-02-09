// Задание-21
// Поиск самого длинного слова

// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const words = string.split(' ');

  let longWord = words[0];

  for (const word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
