// Count the truthy value of an array

const array = [0, null, undefined, '', 2, 1, 5, 10, 6];

function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value)
        count++
    }
    return count;
}

let resultat = countTruthy(array);
console.log(resultat);