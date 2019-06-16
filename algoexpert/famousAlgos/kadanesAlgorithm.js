/*
 * Init our maxSum and total to the first element in the array
 * Iter through all remaining elements to see if the total continuous sum is greater than the previous
 * So long as the total is above 0, we should always keep the continuous count.
 */
// Time O(N) | O(1)
function kadanesAlgorithmMine(array) {
  // Write your code here.
  let maxSum = (total = array[0]);
  for (let i = 1; i < array.length; i++) {
    if (total < 0) total = 0;
    total += array[i];
    if (maxSum < total) maxSum = total;
  }
  return maxSum;
}

function kadanesAlgorithmAlgoExpert(array) {
  // Write your code here.
  let maxSum = (total = array[0]);
  for (let i = 1; i < array.length; i++) {
    const currNum = array[i];
    total = Math.max(total + currNum, currNum);
    maxSum = Math.max(maxSum, total);
  }
  return maxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
