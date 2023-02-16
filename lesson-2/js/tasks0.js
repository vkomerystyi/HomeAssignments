// Задача 0. Обчислити значення виразів

// Описуємо і вводимо значення змінних
let numberA = parseFloat(prompt('Введіть число А', '0'))
let numberB = parseFloat(prompt('Введіть число B', '0'))
let numberC = parseFloat(prompt('Введіть число С', '0'))

// Знаходимо результат
let sumNumber = numberA + 12 + numberB

// Знаходимо результат
let sumNumberTwo = numberA + numberB
let divisionNumber = sumNumberTwo / 2 * numberA
let numberSqrt = Math.sqrt(divisionNumber) 

// Знаходимо результат
let sumNumberThree = (numberA + numberB) * numberC
let numberCbrt =  Math.cbrt(sumNumberThree)

// Знаходимо результат
let divisionSin = numberA / -numberB
let numberSin = Math.sin(divisionSin)

// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Вираз
            </td>
            <td>
            Значення
            </td>
        </tr>
        <tr>
            <td>S1 = a + 12 + b 
            </td>
            <td>
            ${sumNumber}
            </td>
        </tr>
        <tr>
            <td>S2 = &#8730;a + b / 2a  
            </td>
            <td>
            ${numberSqrt.toFixed(1)}
            </td>
        </tr>        
        <tr>
            <td>S3 = &#8731;(a + b)c  
            </td>
            <td>
            ${numberCbrt.toFixed(1)}
            </td>
        </tr>
        <tr>
            <td>S4 = sin(a /-b) 
            </td>
            <td>
            ${numberSin.toFixed(1)}
            </td>
        </tr>
    </table>
`)