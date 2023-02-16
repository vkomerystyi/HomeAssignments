// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

// Описуємо і вводимо значення змінних
const numberSeconds = parseInt(prompt('Вкажіть кількість секунд', '0'))

// Знаходимо результат
let howManyHours = Math.floor(numberSeconds / 60 / 60)
let howManyMinutes = Math.floor(numberSeconds / 60)  - (howManyHours * 60) 
let howManySeconds = numberSeconds % 60
// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Годин
            </td>
            <td>
            ${howManyHours}
            </td>
        </tr>
        <tr>
            <td>Xвилин
            </td>
            <td>
                ${howManyMinutes}
            </td>
        </tr> 
        <tr>
            <td>Секунд
            </td>
            <td>
                ${howManySeconds}
            </td>
        </tr>       
    </table>
`)