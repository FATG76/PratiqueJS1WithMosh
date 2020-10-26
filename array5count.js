//Counting the occurance of a number in array

const numbers = [1, 2, 3, 4, 1, 2, 6, 2];

function countOccurences(array, searchElement) {
    let count = 0;
    for(let element of array){
        if(element === searchElement){
            count++
        }
    }
    return count;
}
const resultat = countOccurences(numbers, 1);
console.log(`L'élement cherché a été trouvé ${resultat} fois`);