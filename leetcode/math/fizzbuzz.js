/**
 * @param {number} n
 * @return {string[]}
 */
// Time O(n) | Space O(n)
var fizzBuzz = function(n) {
  const retArr = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) retArr.push('FizzBuzz');
    else if (i % 3 === 0) retArr.push('Fizz');
    else if (i % 5 === 0) retArr.push('Buzz');
    else retArr.push(i.toString());
  }
  return retArr;
};
