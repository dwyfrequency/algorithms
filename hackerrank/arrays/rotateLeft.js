// url https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
/*

Input [1 2 3 4 5], 4 ->
Output 5 1 2 3 4

Input [1 2 3 4 5 9], 2 ->
Output 3 4 5 9 1 2
*/
// (array, int) -> array
function rotLeft(arr, n) {
  const newArr = Array.from({ length: arr.length });
  for (let i = 0; i < arr.length; i++) {
    const remainder = i - n;
    if (remainder < 0) {
      newArr[arr.length + remainder] = arr[i];
    } else {
      newArr[remainder] = arr[i];
    }
  }
  return newArr;
}
