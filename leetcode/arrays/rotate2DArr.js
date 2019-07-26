/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// INCOMPLETE !!!!!
const swapIdxs = arr => {
  let leftIdx = 0,
    rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    const temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;
    leftIdx++;
    rightIdx--;
  }
};

const rotate = function(matrix) {
  for (const row of matrix) {
    swapIdxs(row);
  }
  return matrix;
};
