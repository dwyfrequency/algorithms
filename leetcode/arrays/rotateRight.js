/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateLeftExtraSpace = (nums, k) => {
  k = k % nums.length;
  return nums.slice(-k).concat(nums.slice(0, -k));
};

// Time O(N) | Space O(1)
const rotateSpaceOn1 = (nums, k) => {
  k = k % nums.length;
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};

console.log(rotateLeftExtraSpace([1, 2, 3], 1));
