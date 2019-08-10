// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (n === 1) {
      return 1;
    }
    let middle = 2;
    let leftMost = 0;
    let rightMost = n;
    while (true) {
      middle = Math.floor((leftMost + rightMost) / 2);
      if (!isBadVersion(middle)) {
        leftMost = middle + 1;
        continue;
      } else if (!isBadVersion(middle - 1) && isBadVersion(middle)) {
        return middle;
      } else {
        rightMost = middle - 1;
      }
    }
  };
};
