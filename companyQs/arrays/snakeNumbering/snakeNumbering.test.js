const { snakeNumbering } = require('./snakeNumbering');

describe('snakeNumbering', () => {
  test('should return snake numbered array', () => {
    expect(snakeNumbering(2, 2)).toEqual([[1, 4], [2, 3]]);
    expect(snakeNumbering(2, 3)).toEqual([[1, 4, 5], [2, 3, 6]]);
    expect(snakeNumbering(5, 0)).toEqual([1, 2, 3, 4, 5]);
  });
});
