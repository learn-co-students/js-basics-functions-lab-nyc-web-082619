// Code your solution in this file!

function distanceFromHqInBlocks(street){
    let distance = street - 42;
    return (distance > 0 ? distance : (-1*distance));
}

function distanceFromHqInFeet(street){
    let distance = street - 42;
    return 264 * (distance > 0 ? distance : (-1*distance));
}

function distanceTravelledInFeet(start, finish){
    let distance = start - finish;
    return 264 * (distance > 0 ? distance : (-1*distance));
}

function calculatesFarePrice (start, finish) {
    let distance = distanceTravelledInFeet(start, finish);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400)
    } else if (distance > 2000 && distance < 2500) {
      return 25
    } else {
      return 'cannot travel that far';
    }
  }