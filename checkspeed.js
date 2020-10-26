//Programme that checks the speed of the driver



const speedLimit = 70;
const kmPerPoint = 5
function checkSpeed(speed){
    if(speed < speedLimit + kmPerPoint)
        return 'ok';
    else{
        const points = Math.floor((speed - speedLimit)/kmPerPoint)
        if(points > 12)
            return 'suspended';
        else
            return `${points} points`;

    }
}   
let outPut = checkSpeed(75);
console.log(outPut);