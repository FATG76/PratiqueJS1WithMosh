//Factory and constructor functions to initialise an object

//factory function

function createObject(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }    
}

let adresse = createObject('a', 'b', 'c');
console.log(adresse);



// Constructor function
function CreateObject(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;    
}

let address = new CreateObject('Rue le Jason', 'Québec', 'G2C 1H5');

console.log(address);