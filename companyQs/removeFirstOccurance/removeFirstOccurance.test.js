const { removeFirstOccurance } = require('./removeFirstOccurance');

describe('removeFirstOccurance', () => {
  let arr;
  beforeEach(() => {
    arr = ['jack', 'snack', 'mack', 'snack', 'crack'];
  });
  test('should return same array', () => {
    expect(removeFirstOccurance(arr, 'cheese')).toEqual(arr);
  });
  test('should return filtered arr', () => {
    expect(removeFirstOccurance(arr, 'jack')).toEqual([
      'snack',
      'mack',
      'snack',
      'crack',
    ]);
  });
  test('should return filtered arr', () => {
    expect(removeFirstOccurance(arr, 'snack')).toEqual([
      'jack',
      'mack',
      'snack',
      'crack',
    ]);
  });
});
