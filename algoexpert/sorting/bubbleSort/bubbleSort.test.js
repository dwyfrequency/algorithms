const {
  bubbleSortOneLoop,
  bubbleSortTwoLoops: bubbleSort,
} = require('./bubbleSort.js');

test('should return same array if less than 2 elements', () => {
  expect(bubbleSort([1])).toEqual([1]);
});

test('should return same array if less than 2 elements', () => {
  expect(bubbleSort([])).toEqual([]);
});

test('should return sorted array', () => {
  expect(bubbleSort([3, 2])).toEqual([2, 3]);
});

test('should return sorted array', () => {
  expect(bubbleSort([1, 4, 3, 2])).toEqual([1, 2, 3, 4]);
});

test('should return sorted array', () => {
  expect(bubbleSort([1, 4, 3, -4, 2])).toEqual([-4, 1, 2, 3, 4]);
});
