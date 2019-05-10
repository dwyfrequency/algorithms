// O(log(n)) | O(1) space
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

const palindromeCheckRecursion = str => {
  // recursion - we cant determine if the str passed in was '' to start
  if (str.length <= 1) {
    return true;
  }
  const lowerStr = str.toLowerCase();
  if (lowerStr[0] === lowerStr[lowerStr.length - 1]) {
    return palindromeCheckRecursion(lowerStr.slice(1, lowerStr.length - 1));
  }
  return false;
};

module.exports = {
  palindromeCheckPointer,
  palindromeCheckRecursion,
};
