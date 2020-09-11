function findOppositeNumber(n, inputNumber){
    return inputNumber < n/2 ? inputNumber + n/2 : inputNumber - n/2;
}

console.log(findOppositeNumber(10,2));
console.log(findOppositeNumber(10,6));