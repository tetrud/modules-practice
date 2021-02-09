// Задание-29
// Операция spread при создании нового объекта

// В конструкторе можно создавать новые тесты,
// для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings.
// Во время создания теста, все или часть настроек можно переопределить,
// они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста,
// необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
