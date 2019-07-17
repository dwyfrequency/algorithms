const {
  binarySearch,
  searchInSortedMatrix,
} = require('./searchInSortedMatrix');
describe('Binary Search Test', () => {
  test('should be sorted', () => {
    expect([3, 1, 4, 5, 7]).toEqual([1, 3, 4, 5, 7]);
  });
});
