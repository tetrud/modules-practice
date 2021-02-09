// Задание-40
//Задача. Обновляем зелье

//Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

//Тесты
//Объявлена переменная atTheOldToad.
//Значение переменной atTheOldToad это объект.
//Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
//Значение свойства atTheOldToad.updatePotionName это метод объекта.
//После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
//После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка']

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    return this.potions.splice(potionIndex, 1, newName);
  },
};

console.log(atTheOldToad.potions); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа']
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')); // ['Зелье скорости', 'Полиморф', 'Каменная кожа']
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка')); // ['Зелье скорости', 'Полиморф', 'Невидимка']
