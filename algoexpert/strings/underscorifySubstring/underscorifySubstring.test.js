const { underscorifySubstring } = require('./underscorifySubstring');

describe('testing for underscorifySubstring', () => {
  test('#1 should underscorifySubstring the substring', () => {
    expect(
      underscorifySubstring(
        'testthis is a testest to see if testestes it works',
        'test'
      )
    ).toBe('_test_this is a _testest_ to see if _testest_es it works');
  });
  test('#2 should underscorifySubstring the substring', () => {
    expect(
      underscorifySubstring(
        'this is a test to see if it works and test',
        'bfjawkfja'
      ).toBe('this is a _test_ to see if it works and _test_')
    );
  });
});
