const { insertionSort } = require('./insertionSort');

test('should return same array if less than 2 elements', () => {
  expect(insertionSort([1])).toEqual([1]);
});

test('should return same array if less than 2 elements', () => {
  expect(insertionSort([])).toEqual([]);
});

test('should return sorted array', () => {
  expect(insertionSort([3, 2])).toEqual([2, 3]);
});

test('should return sorted array', () => {
  expect(insertionSort([1, 4, 3, 2])).toEqual([1, 2, 3, 4]);
});

test('should return sorted array', () => {
  expect(insertionSort([1, 4, 3, -4, 2])).toEqual([-4, 1, 2, 3, 4]);
});
