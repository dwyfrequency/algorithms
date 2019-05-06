// O(nLog(n)) | O(1) space

/**
 * NOTES
 * We need a pointer that can essentially go through all the indexes front and back while the beg and end stay fixed. If we do not find a match, high - reduce the pointer. If we do not find a match low, increase the pointer.
 * If we cant find any matches with the beg and end fixed, we need to shift one of the ends.
 * How do we implement the roving pointer and how do we decide which end to shift?
 * [a, b, c, d, e]
 * if a + pointer(b) + e > targetsum => []
 * else pointer++(c)
 * if the beg idx pointer are ever next to one another and are greater than the target, we need to return an empty arr
 *
 * There is a forever loop somewhere facepalm*/

const threeNumberSum = (arr, target) => {
  // initialize our two points
  // we'll add 1 to the beginning pointer
  let beg = 0,
    end = arr.length - 1,
    pointerIdx = 1;
  arr.sort((a, b) => a - b);
  while (beg < end) {
    const sum = arr[beg] + arr[beg + pointerIdx] + arr[end];
    if (sum === target) {
      return [arr[beg], arr[beg + pointerIdx], arr[end]];
    } else if (sum > target) {
      end--;
      pointerIdx = beg + 1;
    } else if (sum < target && beg + pointerIdx === end - 1) {
      beg++;
      pointerIdx = beg + 1;
    } else {
      pointerIdx++;
    }
  }
  return [];
};
console.log(threeNumberSum([1, 8, 10, 49, 14], 32));

module.exports = {
  threeNumberSum,
};
