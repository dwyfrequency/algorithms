const { isPalindrome } = require('./longestPalindromicSubstring');

// describe('longestPalindromicSubstring', () => {
//   test('should return longest palindrome', () => {});
// });

describe('isPalindrome', () => {
  test('should return true for palindrome', () => {
    expect(isPalindrome('abba')).toBe(true);
  });
  test('should return false for palindrome', () => {
    expect(isPalindrome('habba')).toBe(false);
  });
  test('should return false for palindrome', () => {
    expect(isPalindrome('laugh')).toBe(false);
  });
  test('should return false for palindrome', () => {
    expect(isPalindrome('aa')).toBe(true);
  });
  test('should return false for palindrome', () => {
    expect(isPalindrome('hannah')).toBe(true);
  });
});
