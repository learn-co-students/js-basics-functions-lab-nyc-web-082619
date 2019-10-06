
function distanceFromHqInBlocks(end_block){
    let distance;
    if (end_block>=42) {
        distance = end_block-42
    }else{
        distance=42-end_block
    }
    return distance
}

function distanceFromHqInFeet(end_block){
    return (distanceFromHqInBlocks(end_block) * 264)
}

function distanceTravelledInFeet(start_block, end_block) {
    let distance;
    if (start_block>end_block) {
        distance = ((start_block-end_block)*264)
    }else{
        distance = ((end_block-start_block)*264)
    }
    return distance;
}

function calculatesFarePrice(start_block, end_block){
    distance = distanceTravelledInFeet(start_block, end_block);
    let price;
    if (distance>2500) {
        price = "cannot travel that far"
    }else if (distance>2000){
        price = 25
    }else if (distance>400){
        price = (distance-400)*0.02
    }else if (distance<=400){
        price = 0
    }
    return price
}

calculatesFarePrice(43, 44)
