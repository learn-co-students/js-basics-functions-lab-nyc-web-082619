// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const hq = 42
    return Math.abs(pickup - hq) 
}

function  distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, arrival){
    return Math.abs(pickup - arrival) * 264
}

// function calculatesFarePrice(start, destination){
//     const distance = distanceTravelledInFeet(start, destination);
//     let price;
    
//    switch(distance){
//        case distance <= 400:
//             price = 0;
//         break;
//         case distance > 400 && distance <= 2000:
//              price = (distance - 400) * .02;
//         break;
//         case distance > 2000 && distance < 2500:
//              price = 25;
//         break;
//         case distance > 2500:
//              price ='cannot travel that far';
//    }
//    return price
// }

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }