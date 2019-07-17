const {
  binarySearch,
  searchInSortedMatrix,
} = require('./searchInSortedMatrix');

describe('Binary Search Test', () => {
  test('should be return index of target', () => {
    expect(binarySearch([1, 3, 4, 5, 7], 3)).toBe(1);
  });

  test('should be return index of target', () => {
    expect(binarySearch([1, 3, 4, 5, 7], 7)).toBe(4);
  });

  test('should be return index of target', () => {
    expect(binarySearch([1, 3, 4, 5, 7], 5)).toBe(3);
  });
});
