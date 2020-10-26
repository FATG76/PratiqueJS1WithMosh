//exculding element in the array

const numbers = [1, 2, 3, 4, 2, 1];

function except(array, excluded) {
    for(let i = 0; i <=array.length; i++){
        if(array[i] === excluded)
            array.splice(i, 1);
    }
    return array;    
    
}

console.log(except(numbers, 1));