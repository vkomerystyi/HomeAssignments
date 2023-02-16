// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

// Описуємо і вводимо значення змінних
let numberBeginningYear = 1
let numberEndYear= 12
let startWeek = 0
let endWWeek = 6

// Знаходимо результат
let randomMonth = numberBeginningYear + Math.floor(Math.random()*(numberEndYear - numberBeginningYear + 1)) 
let randomWeek = startWeek + Math.floor(Math.random()*(endWWeek - startWeek + 1)) 
let sumNumber = randomMonth + randomWeek

// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Випадковий номер місяця
            </td>
            <td>
                ${randomMonth}
            </td>
        </tr>
        <tr>
            <td>Випадковий номер дня
            </td>
            <td>
                ${randomWeek}
            </td>
        </tr> 
        <tr>
            <td>Сума чисел
            </td>
            <td>
                ${sumNumber}
            </td>
        </tr>       
    </table>
`)