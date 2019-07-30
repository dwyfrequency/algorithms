/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let total = 1; // start total with 1 b/c 3^0 === 1
  // keep multiplying total by three until it is no longer less than n
  while (total < n) total *= 3;
  // return if total equals n, this tells us if is a power of 3
  return total === n;
};
