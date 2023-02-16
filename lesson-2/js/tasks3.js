// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// Описуємо і вводимо значення змінних
const countProduct = parseInt(prompt('Вкажіть кількість товару', '0'))
const costProduct = parseFloat(prompt('Вкажіть вартість товару', '0'))

// Знаходимо результат
let generalProduct = countProduct * costProduct
let costPDV = generalProduct * 0.05


// Виводимо результат
document.write(`
    <table>
        <tr>
            <td>Загальну вартість
            </td>
            <td>
                ${generalProduct.toFixed(2)}
            </td>
        </tr>
        <tr>
            <td>ПДВ (5% від вартості)
            </td>
            <td>
                ${costPDV.toFixed(2)}
            </td>
        </tr>        
    </table>
`)