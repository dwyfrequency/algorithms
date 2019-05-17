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
const selectionSortMine = arr => {
  if (!arr || arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swapArrayValues(i, minIndex, arr);
  }
  return arr;
};

const selectionSortAlgoExp = arr => {
  let currentIdx = 0;
  while (currentIdx < arr.length - 1) {
    let minIndex = currentIdx;
    for (let i = currentIdx + 1; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }
    swapArrayValues(currentIdx, minIndex, arr);
    currentIdx++;
  }
  return arr;
};

console.log(selectionSortAlgoExp([2, -3, 1]));

module.exports = { selectionSortMine };
