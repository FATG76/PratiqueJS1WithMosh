//Prime numbers

function primeNumbers(limit){
    for(let i = 2; i <limit; i++)
        if( limit % 2 === 0) return false;
    return limit>1;
    

}

console.log(primeNumbers(2));