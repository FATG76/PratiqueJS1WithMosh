// String properties. Function that displayes only le string proprieties of an object

const movie = {
    title: 'a',
    releaseYear: 2008,
    rating: 4.5,
    director: 'b'
}

function showProperties(){
    
    for(let property in movie){
        if(typeof movie[property] === 'string')
            console.log(property, movie[property]) ;
    }
}
showProperties(movie);