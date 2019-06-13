// https://gist.github.com/mjberman024/4d14fd2cbdb31366cdc8293572727368
// The optimized binary search solution can be O(m * log n) time (n is dict array length, m is word length) and O(1) space.
function binaryFind(arr, matcher, comparator) {
  // initialize indexes at the beginning and end of the array, these define the bounds of our "search window"
  let prevLeft = 0;
  let prevRight = arr.length - 1;
  let index;
  // continue until the index has not changed from the previous cycle
  while (index !== prevLeft && index !== prevRight) {
    // find the middle of the existing search window
    index = Math.floor((prevLeft + prevRight) / 2);
    if (matcher(arr[index])) {
      return arr[index];
    }
    if (comparator(arr[index])) {
      // "shrink" the right half of the search window
      prevRight = index - 1;
    } else {
      // "shrink" the left half of the search window
      prevLeft = index + 1;
    }
  }
}
