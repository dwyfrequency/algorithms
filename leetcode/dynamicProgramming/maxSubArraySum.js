/**
 * @param {number[]} nums
 * @return {number}
 */
// Time O(n) | Space O(1)
var maxSubArray = function(nums) {
  let curMax = -Infinity;
  let curSum = -Infinity;
  // Iterate through each number and calculate the current sum
  // if it is less than zero, then we just want the max of the
  // curSum and number
  for (const num of nums) {
    if (curSum < 0) {
      curSum = Math.max(num, curSum);
    } else {
      // if the num is greater than just add it to the curSum
      curSum += num;
    }
    curMax = Math.max(curSum, curMax);
  }
  return curMax;
};
