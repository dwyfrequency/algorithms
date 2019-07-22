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
};
