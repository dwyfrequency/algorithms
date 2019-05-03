const twoNumberSum = (array, targetSum) => {};

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 10], 10));

const bruteForce = (array, targetSum) => {
  // (O)n^2 solution
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (targetSum === array[i] + array[j]) {
        return [array[i], array[j]].sort((a, b) => a - b);
      }
    }
  }
  return [];
};

const hashMap = (array, targetSum) => {
  // (O)n time O(n) space solution
  const hashMap = {};
  for (let i of array) {
    const desiredNum = targetSum - i;
    if (hashMap[desiredNum] !== undefined) {
      return i > desiredNum ? [desiredNum, i] : [i, desiredNum];
    }
    hashMap[i] = i;
  }
  return [];
};

const headAndTail = (array, targetSum) => {
  array.sort((a, b) => a - b); // OlogN
  let beg = 0,
    end = array.length - 1;
  // while our two points dont overlap
  while (beg < end) {
    const sum = array[beg] + array[end];
    if (sum === targetSum) {
      return [array[beg], array[end]];
    } else if (sum > targetSum) {
      end--;
    } else {
      beg++;
    }
  }
  return [];
};

// Do not edit the line below.
module.exports = {
  hashMap,
  bruteForce,
  headAndTail,
};
