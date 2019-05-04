// O(nLog(n)) | O(1) space
const threeNumberSum = (arr, target) => {
  // initialize our two points
  // we'll add 1 to the beginning pointer
  let beg = 0,
    end = arr.length - 1;
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
