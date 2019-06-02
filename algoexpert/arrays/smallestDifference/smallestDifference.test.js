const { smallestDifference } = require('./smallestDifference');

test('should ', () => {
  expect(smallestDifference([1, 2, 4, 5], [-4, 200, 15, 22])).toEqual([1, -4]);
});

test('should ', () => {
  expect(smallestDifference([-1, 5, 6, 7], [-4, 8, 3, 22])).toEqual([7, 8]);
});
