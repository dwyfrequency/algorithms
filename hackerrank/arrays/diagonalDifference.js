// Not complete
function diagonalDifference(arr) {
  // Write your code here
  let rowDepth = arr.length;
  let colDepth = arr[0].length;
  const leftRight = arr[0][0] + arr[1][1] + arr[2][2];
  const rightLeft = arr[0][2] + arr[1][1] + arr[2][0];
  console.log({ leftRight }, { rightLeft });
  return Math.abs(leftRight - rightLeft);
}
