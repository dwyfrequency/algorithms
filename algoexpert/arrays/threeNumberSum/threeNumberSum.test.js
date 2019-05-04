const { threeNumberSum } = require('./threeNumberSum');

test('values that do not sum to the target should return an empty array ', () => {
  expect(threeNumberSum([], 5)).toEqual([]);
});

test('values that do not sum to the target should return an empty array ', () => {
  expect(threeNumberSum([11, 10, -2, 14, 18, 20], 5)).toEqual([]);
});

test('values that do sum to the target should return an array with the correct numbers', () => {
  expect(threeNumberSum([4, 5, 2, 6, 3, 1], 6)).toEqual([1, 2, 3]);
});

test('values that do sum to the target should return an array with the correct numbers', () => {
  expect(threeNumberSum([-1, 5, 2, 6, 4, 1], 5)).toEqual([-1, 1, 5]);
});

test('values that do sum to the target should return an array with the correct numbers', () => {
  expect(threeNumberSum([-1, 5, 2, 6, 4, 24], 5)).toEqual([-1, 2, 4]);
});
