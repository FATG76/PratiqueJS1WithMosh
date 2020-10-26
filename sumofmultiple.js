// Sum of the multiple of 3 and 5

function sumMultiple(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0)
            sum += i;        
    }
    return sum
}
console.log('The result is :', sumMultiple(15));