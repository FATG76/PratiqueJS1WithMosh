// Return the greatest number of an array

const numbers = [8, 6, 1, 2, 3, 10, 4, 7];

function getMax(array) {
    for(let element of array){
        const maximum = Math.max(...array);
        if(element === maximum)
            return maximum
    }
}
const resultMaximum = getMax(numbers);
console.log(resultMaximum);

///Autre possitibilité pour le minimum

function getMin(array) {
    if(array.length === 0) return undefined;

    for(let i = 0; i <= array.length; i++)
    return minimum = Math.min(...array);      
}
const resultMinimun = getMin(numbers);
console.log(resultMinimun);

//Autre possibilité pour la methode reduce

function trouveMax(array) {
    if(array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b)? a : b);    
}
console.log(trouveMax(numbers));

//Autre possibilité

function findMax(array) {
    if(array.length === 0) return undefined;

    let max = array[0];
    let i = 1;
    while(i<=array.length){
        if(array[i]> max) 
            max = array[i]
        i++
    } 
    return max     
}
console.log('------------------');
console.log('Le maximum est', findMax(numbers));