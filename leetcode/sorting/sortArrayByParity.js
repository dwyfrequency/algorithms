/**
 * @param {number[]} A
 * @return {number[]}
 */
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition. SOrt by
var sortArrayByParity = function(arr) {
  const evens = [],
    odds = [];
  for (const num of arr) {
    num % 2 === 0 ? evens.push(num) : odds.push(num);
  }
  return evens.concat(odds);
};
