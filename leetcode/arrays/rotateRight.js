/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateLeftExtraSpace = (nums, k) => {
  k = k % nums.length;
  return nums.slice(-k).concat(nums.slice(0, -k)); // one solution
};

console.log(rotateLeftExtraSpace([1, 2, 3], 1));
