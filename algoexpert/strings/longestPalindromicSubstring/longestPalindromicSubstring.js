// Time O(n^3) | Space O(n)
// time is n^3 because n^2 for the double for loop * n for the isPalindrome
function longestPalindromicSubstring(str) {
  if (!str) return str;
  let maxSubString = str[0];
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = 1; j < str.length; j++) {
      if (maxSubString.length < j - i + 1 && str[i] === str[j]) {
        const subString = str.slice(i, j + 1);
        if (isPalindrome(subString)) {
          maxSubString = subString;
        }
      }
    }
  }
  return maxSubString;
}

// Time O(n) | Space O(1)
function isPalindrome(str) {
  let leftPnt = 0,
    rightPnt = str.length - 1;
  while (leftPnt < rightPnt) {
    if (str[leftPnt] !== str[rightPnt]) {
      return false;
    }
    leftPnt++;
    rightPnt--;
  }
  return true;
}

module.exports = {
  isPalindrome,
  longestPalindromicSubstring,
};
