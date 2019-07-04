/**
 * Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

Example 1:

Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Notes:

1 <= A.length = A[0].length <= 20
0 <= A[i][j] <= 1

Example 2:
[[0 0]
 [1 0]]
 =>
 [[0 1]
  [1 1]]
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImageSlow = function(arr) {
  for (const row of arr) {
    row.reverse().map(num => +!num);
  }
  return arr;
};

var flipAndInvertImageSlightlyFaster = function(arr) {
  for (let row = 0; row < arr.length; row++) {
    const innerArr = [];
    for (let rightPnt = arr[row].length - 1; rightPnt >= 0; rightPnt--) {
      innerArr.push(+!arr[row][rightPnt]);
    }
    arr[row] = innerArr;
  }
  return arr;
};

var flipAndInvertImageBitFlip = function(A) {
  return A.map(a => {
    return a.reverse().map(b => b ^ 1);
  });
};

var flipAndInvertImage = function(arr) {
  for (let row = 0; row < arr.length; row++) {
    let leftPointer = 0,
      rightPointer = arr.length - 1;
    while (leftPointer <= rightPointer) {
      const temp = +!arr[row][leftPointer];
      arr[row][leftPointer] = +!arr[row][rightPointer];
      arr[row][rightPointer] = temp;
      leftPointer++;
      rightPointer--;
    }
  }
  return arr;
};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
