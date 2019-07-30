/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const { length } = this.nums;
  const retArr = Array.from({ length });
  let counter = 0;
  while (counter < length) {
    let idx = Math.floor(Math.random() * this.nums.length);
    // if the val is undefined, fill it and increment counter
    if (retArr[idx] === undefined) {
      retArr[idx] = this.nums[counter];
      counter++;
    }
  }
  return retArr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
