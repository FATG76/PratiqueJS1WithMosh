//Comparison of objects

function CreateAddresse(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;    
}

const addresse1 = new CreateAddresse('a', 'b', 'c');
const addresse2 = new CreateAddresse('a', 'b', 'c');

function areEqual(addresse1, addresse2) {
        return (addresse1.street === addresse2.street) && 
        (addresse1.city === addresse2.city) && 
        (addresse1.zipCode === addresse2.zipCode);         
}

function areSame(addresse1, addresse2) {
    return addresse1 === addresse2;    
}

console.log(areEqual(addresse1, addresse2));
console.log(areSame(addresse1, addresse2));



