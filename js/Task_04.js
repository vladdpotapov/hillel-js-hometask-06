// TASK #04:
// Написать функцию заполнения пользовательскими данными двумерного массива. 
// Длину массива и внутренних массивов задаёт пользователь.

let array = [];

function fillMultidimensionalArray() {
    let subArraysQuantity = parseInt(prompt('Enter the quantity of sub arrays'));
    for (let i = 0; i < subArraysQuantity; i++) {
        let subArraysElementsQuantity = prompt(`Enter the sub array ${i + 1} elements quantity`);
        array[i] = [];

        for (let j = 0; j < subArraysElementsQuantity; j++) {
            array[i].push(prompt('Add the element'));
        }
    }
    console.log(array);
}

fillMultidimensionalArray();