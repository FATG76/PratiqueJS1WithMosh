//Calculate the grades of the students

const marks = [80, 100, 50];

function calculateGrade(marks){
    let sum = 0;
    for(let mark of marks){
        sum += mark;
    }
    let average = sum/marks.length;
    
    if(average < 60) return `${average}: F`;
    if(average < 70) return `${average}: D`;
    if(average < 80) return `${average}: C`;
    if(average < 90) return `${average}: C`;
    return `${average}: A`;   
    
}

console.log(calculateGrade(marks));