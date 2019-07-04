// url: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
  const counter = {};
  for (const num of A) {
    if (counter[num] === undefined) {
      counter[num] = 1;
    } else {
      return num;
    }
  }
  return 0;
};

const repeatedNTimesSet = function(A) {
  const set = new Set();
  for (const num of A) {
    if (!set.has(num)) {
      set.add(num);
    } else {
      return num;
    }
  }
  return 0;
};
