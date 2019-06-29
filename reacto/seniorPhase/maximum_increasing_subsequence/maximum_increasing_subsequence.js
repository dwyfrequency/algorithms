/*
Given an an array of numbers, find the length of the longest possible subsequence that is increasing. This subsequence can "jump" over numbers in the array. For example in `[3, 10, 4, 5]` the longest increasing subsequence (LIS) is `[3, 4, 5]`.
*/

const longestIncreasingSubsequence = arr => {
  const cntArr = Array.from({ length: arr.length }, () => 1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const isIncreasing = arr[j] < arr[i];
      if (isIncreasing) {
        const currentCnt = cntArr[j] + 1;
        if (currentCnt > cntArr[i]) {
          cntArr[i] = currentCnt;
        }
      }
    }
  }
  return Math.max(...cntArr);
};
console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]));
// 3, 4, 6 (or 3, 4, 10) -> 3
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]));
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80) -> 6
