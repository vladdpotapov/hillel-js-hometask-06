// TASK #02:
// Создать функцию которая высчитывает среднее арифметическое числовых элементов массива любой длины.

const array = [ 10, 'Kate', 50, true, 'Hello', -20, false, 70, 'John', -5, 40 ];

// Get the digit elements amount:
function getDigitElementsAmount() {
    let digitElementsAmount = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            digitElementsAmount++;
        }
    } 
    return digitElementsAmount;
}

// Calculate the digit elements sum:
function calcDigitElementsSum() {
    let digitElementsSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number') {
            digitElementsSum += array[i];
        }
    }
    return digitElementsSum;
}

// Calculate the digit elements average:
function calcDigitElementsAverage(sum, amount) {
    let average = sum / amount;
    document.write(average);
}

calcDigitElementsAverage(calcDigitElementsSum(), getDigitElementsAmount());


