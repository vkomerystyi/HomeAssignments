// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

// Описуємо і вводимо значення змінних
const costProductOne = parseFloat(prompt('Введіть вартість першого товару', '0'))
const countProductOne = parseInt(prompt('Введіть кількість першого товару', '0'))
const costProductTwo = parseFloat(prompt('Введіть вартість другого товару', '0'))
const countProductTwo = parseInt(prompt('Введіть кількість другого товару', '0'))
const costProductThree = parseFloat(prompt('Введіть вартість третього товару', '0'))
const countProductThree = parseInt(prompt('Введіть кількість третього товару', '0')) 

// Знаходимо результат
let priceProductOne = costProductOne * countProductOne
let priceProductTwo = costProductTwo * countProductTwo
let priceProductThre = costProductThree * countProductThree

let totalPrice = priceProductOne + priceProductTwo + priceProductThre

// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>
                №
            </td>
            <td>
                Вартість товару
            </td>
            <td>
                Кількість товару
            </td>
            <td>            
                Разом
            </td>
        </tr>
        <tr>
            <td>
                Перший товар
            </td>
            <td>
                ${costProductOne}
            </td>
            <td>
                ${countProductOne}
            </td>
            <td>            
                ${priceProductOne}
            </td>
        </tr>
        <tr>
            <td>
                Другий товар
            </td>
            <td>
                ${costProductTwo}
            </td>
            <td>
                ${countProductTwo}
            </td>
            <td>            
                ${priceProductTwo}
            </td>
        </tr>
        <tr>
            <td>
                Третій товар
            </td>
            <td>
                ${costProductThree}
            </td>
            <td>
                ${countProductThree}
            </td>
            <td>            
                ${priceProductThre}
            </td>
        </tr>
        <tr>
            <td>
                До сплати
            </td>
            <td>
                
            </td>
            <td>               
            </td>
            <td>            
                ${totalPrice}
            </td>
        </tr>

        
    </table>
`)