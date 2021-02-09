// Задание-14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2, 5);

console.log(isValidPassword(firstTwoEls));
console.log(isValidPassword(nonExtremeEls));
console.log(isValidPassword(lastThreeEls));
