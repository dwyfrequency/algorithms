const { totalIslands } = require('./totalIslands');

describe('testing for totalIslands', () => {
  test('#1 should return total islands', () => {
    expect(totalIslands([[1, 0], [0, 1]])).toBe(2);
  });
  test('#2 should return total islands', () => {
    expect(totalIslands([[1, 0, 1], [0, 1, 1]])).toBe(2);
  });
  test('#3 should return total islands', () => {
    expect(totalIslands([[1, 0, 1], [0, 1, 1], [1, 0, 0]])).toBe(3);
  });
});

// npm test algoexpert/graph/totalIslands/totalIslands.test.js
