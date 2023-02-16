// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

// Описуємо і вводимо значення змінних
let numberA = parseFloat(prompt('Введіть число А', '0'))
let numberB = parseFloat(prompt('Введіть число B', '0'))

// Знаходимо результат суми
let sumNumber = numberA + numberB
// Знаходимо результат добуток
let multiplicationNumber = numberA * numberB
// Знаходимо результат частку
let divisionNumber = numberA / numberB

// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Сума
            </td>
            <td>
                ${sumNumber.toFixed(2)}
            </td>
        </tr>
        <tr>
            <td>Добуток
            </td>
            <td>
            ${multiplicationNumber.toFixed(2)}
            </td>
        </tr>        
        <tr>
            <td>Частка
            </td>
            <td>
            ${divisionNumber.toFixed(2)}
            </td>
        </tr>
    </table>
`)