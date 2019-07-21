const { indexOf } = require('./indexOf');

describe('indexOf tests', () => {
  test('should return -1', () => {
    expect(indexOf('cat', 'hat')).toBe(-1);
  });
  test('should return -1', () => {
    expect(indexOf('okl', 'book')).toBe(-1);
  });
  test('should return foundIdx', () => {
    expect(indexOf('book', 'lebook')).toBe(2);
  });
  test('should return foundIdx', () => {
    expect(indexOf('ack', 'jack')).toBe(1);
  });
  test('should return foundIdx', () => {
    expect(indexOf('or', 'hello world')).toBe(7);
  });
});
