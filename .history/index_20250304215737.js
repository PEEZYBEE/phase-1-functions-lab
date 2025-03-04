// Code your solution in this file!
function distanceFromHqInBlocks(startingBlock) {
    const hqBlock = 42;
    return Math.abs(startingBlock - hqBlock);
  }
  
  function distanceFromHqInFeet(startingBlock) {
    const blockLengthInFeet = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(startingBlock) * blockLengthInFeet;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  