// https://gist.github.com/mjberman024/4d14fd2cbdb31366cdc8293572727368
// The optimized binary search solution can be O(m * log n) time (n is dict array length, m is word length) and O(1) space.
function definitionOf(word, dict) {
  // initialize indexes at the beginning and end of the dictionary, these define the bounds of our "search window"
  let prevLeft = 0;
  let prevRight = dict.length - 1;
  let index;
  // continue until the index has not changed from the previous cycle
  while (index !== prevLeft && index !== prevRight) {
    // find the middle of the existing search window
    index = Math.floor((prevLeft + prevRight) / 2);
    if (dict[index].startsWith(word + ' - ')) {
      // startsWith is a string comparison, takes O(m) time
      return dict[index].slice(word.length + 3); // "subtract" the word itself (plus the ' - ' part)
    }
    if (word < dict[index]) {
      // "shrink" the right half of the search window
      prevRight = index - 1;
    } else {
      // "shrink" the left half of the search window
      prevLeft = index + 1;
    }
  }
}
