const {
  hashMap,
  bruteForce,
  headAndTail: twoNumberSum,
} = require('./twoNumberSum');

test('should return array blank array if no two indexes sum to target ', () => {
  // need to use toEqual for objects
  expect(twoNumberSum([4, 3, 2, 1], 9)).toEqual([]);
});

test('should return array blank array if no two indexes sum to target ', () => {
  // need to use toEqual for objects
  expect(twoNumberSum([11, 3, 2, 1], 9)).toEqual([]);
});

test('should return a populated array', () => {
  // need to use toEqual for objects
  expect(twoNumberSum([3, 4, 2, 7], 5)).toEqual([2, 3]);
});
