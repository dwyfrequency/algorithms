const { caesarCipherEncryptor } = require('./caesarCipher');

test('should be encrypted', () => {
  expect(caesarCipherEncryptor('abc', 1)).toBe('bcd');
});

test('should be encrypted', () => {
  expect(caesarCipherEncryptor('abz', 1)).toBe('bca');
});

test('should be encrypted', () => {
  expect(caesarCipherEncryptor('abc', 52)).toBe('abc');
});

test('should be encrypted', () => {
  expect(caesarCipherEncryptor('abc', 0)).toBe('abc');
});
