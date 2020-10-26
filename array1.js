//Function that displays an array of number when taking in argument the min and max of that array


function arrayFromRange(min, max) {
    const numbers = [];
    for(let number = min; number <= max; number++)
        numbers.push(number); 
    return numbers;
}
const arrays= arrayFromRange(-10, 10);
console.log(arrays);


