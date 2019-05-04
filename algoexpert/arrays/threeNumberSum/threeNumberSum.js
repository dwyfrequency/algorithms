// O(nLog(n)) | O(1) space

/**
 * NOTES
 * We need a pointer that can essentially go through all the indexes front and back while the beg and end stay fixed. If we do not find a match, high - reduce the pointer. If we do not find a match low, increase the pointer.
 * If we cant find any matches with the beg and end fixed, we need to shift one of the ends.
 * How do we implement the roving pointer and how do we decide which end to shift? */

const threeNumberSum = (arr, target) => {
  // initialize our two points
  // we'll add 1 to the beginning pointer
  let beg = 0,
    end = arr.length - 1,
    pointerIdx = 1;
  arr.sort((a, b) => a - b);
  while (beg + 1 < end) {
    const sum = arr[beg] + arr[beg + 1] + arr[end];
    if (sum === target) {
      return [arr[beg], arr[beg + 1], arr[end]];
    } else if (sum > target) {
      end--;
    } else {
      beg++;
    }
  }
  return [];
};

module.exports = {
  threeNumberSum,
};
