// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

// Описуємо і вводимо значення змінних
const lengthCentimeters = parseInt(prompt('Вкажіть довжину у сантиметрах', '0'))

// Знаходимо результат
let lengthMeter = lengthCentimeters / 100
let lengthKilometer = lengthCentimeters / 1000

// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Mетр
            </td>
            <td>
                ${lengthMeter.toFixed(2)}
            </td>
        </tr>
        <tr>
            <td>Kілометр
            </td>
            <td>
                ${lengthKilometer.toFixed(3)}
            </td>
        </tr>        
    </table>
`)