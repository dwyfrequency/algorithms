/**
 * @param {string} s
 * @return {boolean}
 */
// Time O(n) | Space O(1)
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    // inner while's test to see if item is not alpha numberic, skip it
    while (/[^a-z0-9]/.test(s[left])) left++;
    while (/[^a-z0-9]/.test(s[right])) right--;
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
