// Code your solution in this file!
function distanceFromHqInBlocks(arg){
    let result
    if (arg > 42) {
    result = arg - 42;
    }
    else if (arg < 42){
        result = 42 - arg;
    }
    return result
}

function distanceFromHqInFeet(arg){
    let result = distanceFromHqInBlocks(arg) *  264;
    return result
}

function distanceTravelledInFeet(arg1, arg2){
    let result = (arg2 - arg1) * 264;
    if (result > 1){
        return result
    }
    else if (result < 1){
        result = (result * -1)
    }
    return result
}

function calculatesFarePrice(start, destination){
    let result 
    const dis = distanceTravelledInFeet(start, destination)
    if (dis < 400){
        result = 0
    }
    else if (dis > 400 && dis <= 2000){
        result =  (dis - 400)* .02;
    }
    else if (dis > 2000 && dis < 2500){
        result = 25
    }   
    else if ( dis > 2500) {
        result = 'cannot travel that far'
    }
    return result
}