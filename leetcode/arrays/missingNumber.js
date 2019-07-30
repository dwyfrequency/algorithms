/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const { length } = nums;
  const foundStore = Array.from({ length });
  for (const num of nums) {
    foundStore[num] = true;
  }
  for (let i = 0; i <= length; i++) {
    if (foundStore[i] === undefined) return i;
  }
};
