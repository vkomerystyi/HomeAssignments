// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

// Описуємо і вводимо значення змінних
const yearOfBirth = parseInt(prompt('Введіть Ваш рік народження', '1900'))
const yearToDay = parseInt(prompt('Введіть Ваш рік народження', '1900'))

// Знаходимо результат
const yourAge = yearToDay - yearOfBirth

// Виводимо результат
document.write(`Вам ${yourAge} p.`)