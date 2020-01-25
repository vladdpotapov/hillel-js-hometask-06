let myArray = [99,'Hello World!',10,undefined,25,3,1,true,63,30,false,75,'name',39,80,41,null,136,'10',[2],{name: 'John'}];

function getAverageNumberOfArray(array) {
    let sum = 0;
    let numberAmount = 0;
    let averageNumber;
    for (let i = 0; i < array.length; i++) {       
        if (typeof array[i] === 'number') {
            sum += array[i];
            numberAmount++;
        } else {
            continue;
        }
    }
    averageNumber = sum / numberAmount;
    return `The average number is ${averageNumber}`;
}

document.write(getAverageNumberOfArray(myArray));