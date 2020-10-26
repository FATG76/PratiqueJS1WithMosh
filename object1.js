//Create an object and display its containt

const address = {
    street : 'Rue le Jason',
    city : 'Québec',
    zipCode : 'G2C 1H5'
}

function showAddress(address) {
    for(let key in address)
        console.log(`${key} : ${address[key]}`);    
}

showAddress(address);

