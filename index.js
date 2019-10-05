function distanceFromHqInBlocks(location) {
  let distance = Math.abs(location - 42);
  return distance;
}

function distanceFromHqInFeet(location) {
  let distance = distanceFromHqInBlocks(location);
  return distance*264;
}

function distanceTravelledInFeet(sb, eb) {
  let distance = Math.abs(sb - eb);
  return distance*264;
}

function calculatesFarePrice(sb, eb) {
  let distance = distanceTravelledInFeet(sb, eb);
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 & distance <= 2000) {
    let chargedDistance = distance - 400;
    return chargedDistance*.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

console.log(distanceFromHqInFeet(43))