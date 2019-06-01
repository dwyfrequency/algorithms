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
  // all until they
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let delta = Infinity,
    num1,
    num2;
  for (let i of arrayOne) {
    let leftIdx = 0;
    while (leftIdx < arrayTwo.length - 1) {
      const currDif = i - arrayTwo[leftIdx];
      if (Math.abs(currDif) < delta) {
        delta = Math.abs(currDif);
        num1 = i;
        num2 = arrayTwo[leftIdx];
      }
      if (delta === 0) {
        return [num1, num2];
      }
    }
  }
  return [num1, num2];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
