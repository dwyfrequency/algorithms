function smallestDifferenceNaive(arrayOne, arrayTwo) {
  // Write your code here.
  // sort both arrs - start from first index and iterate through
  // all until they
  let delta = Infinity,
    num1,
    num2;
  for (let i of arrayOne) {
    for (let j of arrayTwo) {
      const currDif = Math.abs(i - j);
      if (currDif < delta) {
        delta = currDif;
        num1 = i;
        num2 = j;
      }
      if (delta === 0) {
        return [num1, num2];
      }
    }
  }
  return [num1, num2];
}

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  // sort both arrs - start from first index and iterate through
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let minDelta = Infinity,
    num1,
    num2;
  let arr1Idx = 0,
    arr2Idx = 0;
  while (
    arr1Idx < arrayOne.length &&
    arr2Idx < arrayTwo.length &&
    minDelta !== 0
  ) {
    const currentDelta = arrayOne[arr1Idx] - arrayTwo[arr2Idx];
    if (Math.abs(currentDelta) < minDelta) {
      minDelta = Math.abs(currentDelta);
      num1 = arrayOne[arr1Idx];
      num2 = arrayTwo[arr2Idx];
    }
    if (arrayOne[arr1Idx] < arrayTwo[arr2Idx]) {
      arr1Idx++;
    } else {
      arr2Idx++;
    }
  }
  return [num1, num2];
}

console.log(smallestDifference([1, 2, 4, 5], [-4, 200, 15, 22]));

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
