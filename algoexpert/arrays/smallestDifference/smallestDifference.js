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

// Time O(Nlog(N) + Mlog(M)) from the sorting
// where N is the length of array1 and M is the length of array2
// Space O(1) - new array is negligible
const smallestDifferenceAlgoExpert = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let arr1Idx = 0,
    arr2Idx = 0;
  let smallestDif = Infinity;
  let smallestPair = [];
  while (arr1Idx < arrayOne.length && arr2Idx < arrayTwo.length) {
    const firstNum = arrayOne[arr1Idx];
    const secondNum = arrayTwo[arr2Idx];
    const currentDif = firstNum - secondNum;
    if (firstNum < secondNum) {
      arr1Idx++;
    } else if (firstNum > secondNum) {
      arr2Idx++;
    } else {
      return [firstNum, secondNum];
    }
    if (Math.abs(currentDif) < smallestDif) {
      smallestDif = Math.abs(currentDif);
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
};

console.log(smallestDifference([1, 2, 4, 5], [-4, 200, 15, 22]));

// Do not edit the line below.
module.exports = { smallestDifference };
