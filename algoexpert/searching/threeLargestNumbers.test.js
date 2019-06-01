const {
  threeLargestNumbersFaster: threeLargestNumbers,
  threeLargestNumbersEasyButSlower,
} = require('./threeLargestNumbers');

test('should return largest three numbers in array in sorted order', () => {
  expect(threeLargestNumbers([1, 2, -4, 5, 7, -1, 1])).toEqual([2, 5, 7]);
});
