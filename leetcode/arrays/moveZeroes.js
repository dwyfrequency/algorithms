/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Time O(n) | Space O(1)
var moveZeroes = function(nums) {
  let leftPnt = 0,
    rightPnt = 1;
  while (rightPnt < nums.length) {
    if (nums[leftPnt] !== 0) {
      leftPnt++;
      rightPnt++;
    } else if (nums[leftPnt] === 0 && nums[rightPnt] === 0) {
      rightPnt++;
    } else {
      nums[leftPnt] = nums[rightPnt];
      nums[rightPnt] = 0;
      leftPnt++;
    }
  }
  return nums;
};
