/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (/^[a-z]/.test(s[left])) left++;
    while (/^[a-z]/.test(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
