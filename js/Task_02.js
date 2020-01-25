// TASK #02:
// Создать функцию которая высчитывает среднее арифметическое числовых элементов массива любой длины.

let givenArray = [20, true, 'John', 5, {name: 'Bill'}, 157, undefined, -20, 30, false, 50, null, -70, 'Kate'];

function calcNumberAverage(array) {
    let numberSum = 0;
    let numberAmount = 0;
    let numberAverage;
    for (let i = 0; i < array.length; i++) {       
        if (typeof array[i] === 'number') {
            numberSum += array[i];
            numberAmount++;
        }
    }
    numberAverage = numberSum / numberAmount;
    return `The average number: ${numberAverage}`;
}

document.write(calcNumberAverage(givenArray));