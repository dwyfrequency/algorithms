// URL: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// sort(arr) -> int
// Time O(n) | Space O(1)
const removeDuplicates = arr => {
  // take sorted array and return length of unique nums
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      continue;
    } else {
      // b/c we are deleting the entry behind us, we need to reduce i
      // or we might skip one of the letters
      // our array is changing in length so our i will become offset
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
