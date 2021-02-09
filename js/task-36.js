// Задание-36
// Свой порядок сортировки строк

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт',
];

const authorsInAlphabetOrder = [...authors].sort((prev, next) =>
  prev.localeCompare(next),
);

const authorsInReversedOrder = [...authors].sort((prev, next) =>
  next.localeCompare(prev),
);
