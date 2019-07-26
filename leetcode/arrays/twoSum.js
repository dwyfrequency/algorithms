/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time O(N) | Space O(N)
var twoSum = function(nums, target) {
  const pastNums = {};
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i];
    if (pastNums[delta] !== undefined) return [pastNums[delta], i];
    else pastNums[nums[i]] = i;
  }
  return [];
};
