/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(arr) {
  let carry = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const curSum = arr[i] + 1;
    if (curSum >= 10) {
      carry = 1;
      arr[i] = curSum % 10;
    } else {
      carry = 0;
      arr[i] = curSum;
      break;
    }
  }
  if (carry) arr.unshift(carry);
  return arr;
};
