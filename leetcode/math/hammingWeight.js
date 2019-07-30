/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// Time O(2n) | Space O(n)
var hammingWeight = function(n) {
  return n
    .toString(2) // convert number to binary
    .split('') // split resulting num to str
    .filter(x => x === '1').length; // create array of 1s
};
