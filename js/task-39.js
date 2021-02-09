// Задание-39
//Задача. Удаляем зелье

//Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

//Тесты
//Объявлена переменная atTheOldToad.
//Значение переменной atTheOldToad это объект.
//Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
//Значение свойства atTheOldToad.removePotion это метод объекта.
//После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
//После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа'].

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],

  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    const potionDeleted = this.potions.splice(potionIndex, 1);
    return potionDeleted;
  },
};

console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.removePotion('Зелье скорости'));
