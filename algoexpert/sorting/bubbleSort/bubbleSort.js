const bubbleSort = arr => {
  if (!arr) return arr;
  let left = 0,
    right = 1,
    passes = 0;

  /* we know the last index of the array will be the largest on each pass through so
  we can exclude it in our next sort  */
  while (right < arr.length - passes) {
    if (arr[left] > arr[right]) {
      const tempVal = arr[left];
      arr[left] = arr[right];
      arr[right] = tempVal;
    }

    // have we hit the end of the array for the idxs we care about else keep added to our pointers
    if (right === arr.length - 1 - passes) {
      left = 0;
      right = 1;
      passes++;
    } else {
      left++;
      right++;
    }
  }
  return arr;
};

console.log(bubbleSort([1, 4, 3, 2]));

module.exports = {
  bubbleSort,
};
