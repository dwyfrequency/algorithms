const {
  isPalindrome,
  longestPalindromicSubstring,
} = require('./longestPalindromicSubstring');

describe('longestPalindromicSubstring', () => {
  test('should return longest palindrome', () => {
    expect(longestPalindromicSubstring('abba')).toBe('abba');
  });
  test('should return longest palindrome', () => {
    expect(longestPalindromicSubstring('aabba')).toBe('abba');
  });
  test('should return longest palindrome', () => {
    expect(longestPalindromicSubstring('bleme')).toBe('eme');
  });
  test('should return longest palindrome', () => {
    expect(longestPalindromicSubstring('lovloole')).toBe('lool');
  });
  test('should return longest palindrome', () => {
    expect(longestPalindromicSubstring('ehaaanbe')).toBe('aaa');
  });
});

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
    expect(isPalindrome('aaa')).toBe(true);
  });
  test('should return false for palindrome', () => {
    expect(isPalindrome('hannah')).toBe(true);
  });
});
