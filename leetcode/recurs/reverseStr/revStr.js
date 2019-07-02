/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s, tail = s.length - 1) {
  if (tail < 0) return '';
  return s[tail] + reverseString(s, tail - 1);
};

console.log(reverseString('hello'));
