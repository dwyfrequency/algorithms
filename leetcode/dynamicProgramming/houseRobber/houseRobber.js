// Problem: https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(N) | Space O(1)
var rob = function(nums) {
  if (!nums.length) {
    return nums;
  }
  const cntNums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      cntNums.push(nums[0] > nums[1] ? nums[0] : nums[1]);
    } else {
      const inplaceSum = cntNums[i - 2] + nums[i];
      if (inplaceSum > cntNums[i - 1]) {
        cntNums.push(inplaceSum);
      } else {
        cntNums.push(cntNums[i - 1]);
      }
    }
  }
  return cntNums[cntNums.length - 1];
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([4, 9, 7, 1])); // 11
