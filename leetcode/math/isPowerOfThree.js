/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let total = 1;
  while (total < n) total *= 3;
  return total === n;
};
