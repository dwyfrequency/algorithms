const swapArrayValues = (a, b, arr) => {
  if (a === b) {
    return arr;
  } else {
    const tempVal = arr[a];
    arr[a] = arr[b];
    arr[b] = tempVal;
    return arr;
  }
};

// Worst case Time O(N^2) | O(1) space
const selectionSort = arr => {
  if (!arr || arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i],
      minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
    }
    swapArrayValues(i, minIdx, arr);
  }
  return arr;
};

module.exports = { selectionSort };
