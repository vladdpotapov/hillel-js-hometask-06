// TASK #05:
// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor".

function remove(text, symbols) {
    let string = text.split([]);
    let sym = symbols.split([]);

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < sym.length; j++) {
            if (string[i] === sym[j]) {
                string.splice(i, 1);
            }
        }
    }

    let str = string.join('');
    console.log(str);
    console.log(sym);
}

remove('bobo', 'o');
