// O(log(n)) | O(1) space
const palindromeCheck = str => {
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

module.exports = {
  palindromeCheck,
};
