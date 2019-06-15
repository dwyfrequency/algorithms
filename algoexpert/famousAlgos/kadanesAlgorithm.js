// Time O(N) | O(1)
function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSum = (total = array[0]);
  for (let i = 1; i < array.length; i++) {
    if (total < 0) total = 0;
    total += array[i];
    if (maxSum < total) maxSum = total;
  }
  return maxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
