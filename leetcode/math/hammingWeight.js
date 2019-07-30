/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// Time O(2n) | Space O(n)
var hammingWeight = function(n) {
  return n
    .toString(2)
    .split('')
    .filter(x => x === '1').length;
};
