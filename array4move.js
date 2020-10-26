//Moving an element by changing its position in the array.

const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;      
}
 const resultat = move(numbers, 3, -2);
 console.log(resultat);