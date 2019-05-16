const swapValues = (a, b, arr) => {
  const tempVal = arr[a];
  arr[a] = arr[b];
  arr[b] = tempVal;
  return arr;
};

// Worst case Time O(N^2) | O(1) space
// Best case Time O(N) | O(1) space
const insertionSortMine = (arr = []) => {
  if (arr.length < 2) return arr;

  let sorted = false;
  let right = 1;
  while (!sorted) {
    for (let i = right; i > 0; i--) {
      if (arr[i - 1] > arr[i]) {
        swapValues(i - 1, i, arr);
        continue;
      }

      if (right >= arr.length - 1) {
        sorted = true;
        break;
      }
    }
    right++;
  }
  return arr;
};

const insertionSortAlgoExp = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swapValues(j - 1, j, arr);
      j -= 1;
    }
  }
  return arr;
};

console.log(insertionSortAlgoExp([5, 3]));

console.log(insertionSortAlgoExp([1, 4, 3]));

console.log(insertionSortAlgoExp([1, 4, 3, -4, 2]));
console.log(insertionSortAlgoExp([1, 4, 3, 2]));

module.exports = {
  insertionSortMine,
  insertionSortAlgoExp,
};
