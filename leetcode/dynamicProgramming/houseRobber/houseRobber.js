// Problem: https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return nums;
  }
  const cntNums = Array.from({ length: nums });
  if (nums.length === 1) {
    cntNums.push(nums[0]);
  }
  if (nums.length === 2) {
    cntNums.push(nums[0] > nums[1] ? nums[0] : nums[1]);
  }

  for (let i = 2; i < nums.length; i++) {
    const inplaceSum = cntNums[i - 2] + nums[i];
    if (inplaceSum > nums[i - 1]) {
      cntNums.push(inplaceSum);
    } else {
      cntNums.push(nums[i - 1]);
    }
  }
  return cntNums[cntNums.length - 1];
};
