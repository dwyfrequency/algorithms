/**
 * @param {number[]} nums
 * input [ 1 , 5 , 7 , 4]
 * cache [ 0 , 1 , 6 , 13 , 17 ]
 * idx     0   1 , 2 ,  3 ,  4
 * cache[index + 1] is everything summed up prior to the index + 1
 * (1, 3) -> is all four index spots 3 + 1
 * to get a between range, we get our end range index + 1 and minus
 * the starting index ie. cache 1
 */
var NumArray = function(nums) {
  this.cache = Array.from({ length: nums.length + 1 });
  this.cache[0] = 0;
  nums.forEach((num, idx) => {
    this.cache[idx + 1] = num + this.cache[idx];
  });
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.cache[j + 1] - this.cache[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

//  OTHER SOLUTION
/**
 * @param {number[]} nums
 * input [ 1 , 5 , 7 , 4]
 * cache [ 0 , 1 , 6 , 13 , 17 ]
 * idx     0   1 , 2 ,  3 ,  4
 * cache[index + 1] is everything summed up prior to the index + 1
 * (1, 3) -> is all four index spots 3 + 1
 * to get a between range, we get our end range index + 1 and minus
 * the starting index ie. cache 1
 */
