// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  return streetNum > 42 ? streetNum - 42 : 42 - streetNum;
}

function distanceFromHqInFeet(streetNum) {
  return distanceFromHqInBlocks(streetNum)*264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400){
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500){
    return "cannot travel that far";
  }
}