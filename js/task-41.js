// Задание-41
//Задача. Расширяем инвентарь

//Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
//{
//  name: 'Дыхание дракона',
//  price: 700
//}

//Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
      return this.potions.push(potionName);
    }
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        return this.potions.splice(potionIndex, 1);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 });
console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Дыхание дракона', price: 270 });
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion('Зелье скорости'));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.table(atTheOldToad.getPotions());

console.log(
  atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'),
);
console.table(atTheOldToad.getPotions());
