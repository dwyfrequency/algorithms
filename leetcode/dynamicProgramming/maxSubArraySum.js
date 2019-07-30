/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let curMax = -Infinity;
  let curSum = -Infinity;
  for (const num of nums) {
    if (curSum < 0) {
      curSum = Math.max(num, curSum);
    } else {
      curSum += num;
    }
    curMax = Math.max(curSum, curMax);
  }
  return curMax;
};
