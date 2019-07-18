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

describe('searchInSortedMatrix', () => {
  const matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ];
  test('should return first index', () => {
    expect(searchInSortedMatrix(matrix, 1)).toEqual([0, 0]);
  });
  test('should return last index', () => {
    expect(searchInSortedMatrix(matrix, 1004)).toEqual([4, 5]);
  });
  test('should return not found coordinates', () => {
    expect(searchInSortedMatrix(matrix, 10020)).toEqual([-1, -1]);
  });
  test('should return index', () => {
    expect(searchInSortedMatrix(matrix, 32)).toEqual([1, 4]);
  });
});
