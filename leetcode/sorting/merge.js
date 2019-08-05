/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let rightPnt = m + n - 1; // gets us the last idx of the array
  m--; // this is the total len of sub arr so must minus 1
  n--; // same as above
  while (rightPnt >= 0) {
    // iterate until rightpnt dips below 0
    if (n < 0 || nums1[m] > nums2[n]) {
      // if we've either run out of items in n or m is greate
      nums1[rightPnt] = nums1[m];
      m--;
    } else {
      nums1[rightPnt] = nums2[n];
      n--;
    }
    rightPnt--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [0, 5, 6], 3));
