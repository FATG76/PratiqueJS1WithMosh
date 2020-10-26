//Funtion that displays the rows of stars

// function showStars(rows){
//     let star = '*';
//     for(let i = 0; i <= rows; i++){
//         console.log(star.repeat(i))
//     }
       
// }
// showStars(10);

function shaoAtars2(rows){
    for(let i = 1; i<=rows; i++){
        let det = '';
        for(let j = 0; j < i; j++)
            det +='*'
        console.log(det);       
    }
        
}

shaoAtars2(5);