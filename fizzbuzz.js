//FIZZBUZZ funtion

let outPut = fizzBuzz(7);
console.log(outPut);

function fizzBuzz(input){
    if(typeof input !=='number')
        return NaN;
    if((input %3 === 0) && (input %5 === 0))
        return 'FIZBUZZ';
    if(input % 3 === 0)
        return 'Fizz';
    if(input % 5 === 0)
        return 'Buzz';
    return input;
   
}
