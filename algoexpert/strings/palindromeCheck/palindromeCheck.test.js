const {
  palindromeCheckPointer: palindromeCheck,
  palindromeCheckRecursion,
  palindromeCheckReverseStringAndCompare,
} = require('./palindromeCheck');

test('passed an empty string should return false', () => {
  expect(palindromeCheck('')).toBe(false);
});

test('passed a non-palindrome string should return false', () => {
  expect(palindromeCheck('blue')).toBe(false);
});

test('passed a non-palindrome string should return false', () => {
  expect(palindromeCheck('banana')).toBe(false);
});

test('passed a palindrome string should return true', () => {
  expect(palindromeCheck('racecar')).toBe(true);
});

test('passed a palindrome string should return true', () => {
  expect(palindromeCheck('racecar')).toBe(true);
});

test('passed a palindrome string should return true even with capital letters mixed', () => {
  expect(palindromeCheck('racECar')).toBe(true);
});
