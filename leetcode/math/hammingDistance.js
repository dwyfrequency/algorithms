/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// Time O(n) | Space O(n)
var hammingDistance = function(x, y) {
  return (x ^ y) // take XOR
    .toString(2) // convert num to binary then to string
    .split('') // split the string
    .filter(x => x === '1').length; // take the length of the resulting array when we only want character 1
};
