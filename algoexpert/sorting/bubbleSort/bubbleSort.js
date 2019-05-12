// Time O(N^2) | O(1) space
const bubbleSortOneLoop = arr => {
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

const swapArrayValues = (arr, i, j) => {
  const tempVal = arr[i];
  arr[i] = arr[j];
  arr[j] = tempVal;
};

const bubbleSortTwoLoops = arr => {
  let sorted = false;
  while (!sorted) {
    let counter = 0;
    sorted = true;
    for (let i = 0, len = arr.length - counter; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        // if we every swap values, then the arr is not fully sorted - so stay in while loop
        swapArrayValues(arr, i, i + 1);
        sorted = false;
      }
    }
    counter++;
  }
  return arr;
};

console.log(bubbleSortTwoLoops([1, 4, 3, 2]));

module.exports = {
  bubbleSortOneLoop,
  bubbleSortTwoLoops,
};
