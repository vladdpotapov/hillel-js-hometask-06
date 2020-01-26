// Task #03:
// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
// В переменной знак может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной znak.

function doMath(x, znak, y) {
    let result;
    switch(znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;  
        case '':
            result = x ** y;
            break;   
    }
    return result;
}

let res = doMath(10,'*',5);
document.write(`The result: ${res}`);

