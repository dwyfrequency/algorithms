// Solution - https://gist.github.com/dhf-fullstack/ae051389259bda18870efbea0e16d9ae

//:: (str) => bool
const matchingBrackets = str => {
  // Time O(N) | Space O(N) -> really O(2N) but we drop the constant
  /* sample input
  '[{b}]' -> true
  [(] -> false
  ba{}c -> valid
  {}[{}] -> valid
  {{} -> false
  [(]) -> false
  str = '{}[]()'
  str.include(x) -> true push to arr
  arr[]
  look at last entry in arr and see if it matches the current value to be pushed in.
  eliminate both
  arr ['[', '{', '}', ']',]
  */
  if (!str) false;
  const matchObj = {
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    '(': ')',
    ')': '(',
  };
  const arr = [];
  const opening = '{[(';
  str.split('').forEach(letter => {
    if (matchObj[letter]) {
      if (arr[0] === matchObj[letter] && opening.includes(arr[0])) arr.shift();
      else arr.unshift(letter);
    }
  });

  return !arr.length;
};

console.log(matchingBrackets('{}[{}]')); // valid
console.log(matchingBrackets('[{}]')); // valid
console.log(matchingBrackets('{}[{]')); // invalid
console.log(matchingBrackets('{}a[{]')); // invalid
console.log(matchingBrackets('[}}{{]')); // invalid
