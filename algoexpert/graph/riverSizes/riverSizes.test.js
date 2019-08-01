const { riverSizes } = require('./riverSizes');
describe('riverSizes sizes validation', () => {
  test('should return array of rivers and their respective sizes', () => {
    expect(riverSizes([[1, 0], [0, 1]])).toEqual([1, 1]);
  });
  test('should return array of rivers and their respective sizes', () => {
    expect(riverSizes([[1, 0, 1], [0, 1, 1]])).toEqual([1, 3]);
  });
  test('should return array of rivers and their respective sizes', () => {
    expect(riverSizes([[1, 0, 1], [0, 0, 1]])).toEqual([1, 2]);
  });
});
