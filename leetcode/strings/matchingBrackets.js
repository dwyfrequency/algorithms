/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  const hashMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];
  for (const bracket of s) {
    if (hashMap[bracket]) {
      stack.push(bracket);
    } else {
      const topOfStack = stack.pop();
      if (hashMap[topOfStack] !== bracket) return false;
    }
  }
  return !stack.length;
};
