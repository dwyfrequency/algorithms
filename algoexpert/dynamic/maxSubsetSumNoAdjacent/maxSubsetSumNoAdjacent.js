const pushNewAndReplacePrevArrayVal = (newValue, arr) => {
  arr[0] = arr[1];
  arr[1] = newValue;
};
// Time O(N) | Space O(1)
// Space O(1) b/c we are only storing at most 2 values in new arr
const maxSubsetSumNoAdjacent = arr => {
  if (!arr.length) {
    return 0;
  } else if (arr.length < 3) {
    return Math.max(...arr);
  }

  const maxSumArr = [arr[0], Math.max(arr[0], arr[1])];
  for (let num of arr.slice(2)) {
    const currentMaxSum = Math.max(maxSumArr[0] + num, maxSumArr[1]);
    pushNewAndReplacePrevArrayVal(currentMaxSum, maxSumArr);
  }
  return Math.max(...maxSumArr);
};
