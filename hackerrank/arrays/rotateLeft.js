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

function rotLeftSad(a, d) {
  const len = a.length;
  d = d % len; // in case d is greater than len, we bring it down
  const retArr = Array.from({ length: len }); // create an array of size arr len
  for (let i = 0; i < len; i++) {
    const newIdx = i - d; // if newIdx is negative, subtrack by length
    if (newIdx < 0) {
      retArr[len + newIdx] = a[i];
    } else {
      retArr[newIdx] = a[i];
    }
  }
  return retArr;
}

function rotLeftCheeky(a, d) {
  d = d % a.length; // in case d is greater than the length
  return a.slice(d).concat(a.slice(0, d)); // start beg of array at d
  // concat up to d at the end
}

rotLeftSad([1, 2, 3, 4, 5], 8);
