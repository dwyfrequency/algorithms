// Time O(1) | O(1) space
// Time is constant because we are not storing any new strings as opposed to the recursive solution
const palindromeCheckPointer = str => {
  if (!str) {
    return false;
  }
  const lowerStr = str.toLowerCase();
  const midpoint = Math.floor(lowerStr.length);
  for (let i = 0, right = lowerStr.length - 1; i < midpoint; i++) {
    if (lowerStr[i] !== lowerStr[right - i]) {
      return false;
    }
  }
  return true;
};

// Same as above
const isPalindrome = str => {
  if (!str) {
    return false;
  }
  const lowerStr = str.toLowerCase();
  let leftIdx = 0,
    rightIdx = str.length - 1;
  while (leftIdx < rightIdx) {
    if (lowerStr[leftIdx] !== lowerStr[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
};

// O(log(N)) | O(N) space
// even though it really is o(N)/2 time that converges to just O(N)
// b/c we're dealing with recursion it is not O(1) space, we have to account for the call stack
// with tail recursion in the compiler - it can be reduced to O(1) so long as the recursive call is the last call in the function
const palindromeCheckRecursion = (str, i = 0) => {
  // recursion - we cant determine if the str passed in was '' to start
  if (str === '' && i === 0) {
    return false;
  }

  const j = str.length - 1 - i;
  const lowerStr = str.toLowerCase();
  return i >= j
    ? true
    : lowerStr[i] === lowerStr[j] && palindromeCheckRecursion(lowerStr, i + 1);
};

// Time O(log(N)) | O(N) space
const palindromeCheckArrayReverse = str => {
  if (!str) {
    return false;
  }
  const arr = [];
  for (let i = str.length - 1; 0 <= i; i--) {
    arr.push(str[i]);
  }
  return str.toLowerCase() === arr.join('').toLowerCase();
};

// Time O(N^2) | Space O(N)
// Time b/c we strs are immutable and we are creating a new string each time. When we create the string, we have to iterate through each letter
// Space b/c we are just creating a string of the same length
const palindromeCheckReverseStringAndCompare = str => {
  if (!str) {
    return false;
  }
  let newStr = '';
  for (let i = str.length - 1; 0 <= i; i--) {
    newStr += str[i];
  }
  return str.toLowerCase() === newStr.toLowerCase();
};

module.exports = {
  palindromeCheckPointer,
  isPalindrome,
  palindromeCheckRecursion,
  palindromeCheckArrayReverse,
  palindromeCheckReverseStringAndCompare,
};
