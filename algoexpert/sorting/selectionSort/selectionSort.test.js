const { selectionSortMine: selectionSort } = require('./selectionSort');

test('should return same array if less than 2 elements', () => {
  expect(selectionSort([1])).toEqual([1]);
});

test('should return same array if less than 2 elements', () => {
  expect(selectionSort([])).toEqual([]);
});

test('should return sorted array', () => {
  expect(selectionSort([3, 2])).toEqual([2, 3]);
});

test('should return sorted array', () => {
  expect(selectionSort([1, 4, 3, 2])).toEqual([1, 2, 3, 4]);
});

test('should return sorted array', () => {
  expect(selectionSort([1, 4, 3, -4, 2])).toEqual([-4, 1, 2, 3, 4]);
});
