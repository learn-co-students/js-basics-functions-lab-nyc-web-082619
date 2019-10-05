// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let distance = pickup - 42
    return Math.abs(distance)
}

function distanceFromHqInFeet(pickup){
    let distance = pickup - 42
    return Math.abs(distance) * 264

}

function distanceTravelledInFeet(start,end){
    let distance = (end - start)*264
    return Math.abs(distance)
}

function calculatesFarePrice(start,end){
    if (Math.abs(end-start) * 264 < 400){
        return 0
    }
    else if (Math.abs(end - start)*264 > 400 && Math.abs(end-start)*264 <2000){
        return ((Math.abs(end-start) * 264 - 400)* .02)
    }
    else if (Math.abs(end - start)*264 > 2000 && Math.abs(end-start)*264 < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }

}
