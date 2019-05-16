const swapValues = (a, b, arr) => {
  const tempVal = arr[a];
  arr[a] = arr[b];
  arr[b] = tempVal;
  return arr;
};

const insertionSort = (arr = []) => {
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
console.log(insertionSort([5, 3]));

console.log(insertionSort([1, 4, 3]));

console.log(insertionSort([1, 4, 3, -4, 2]));
console.log(insertionSort([1, 4, 3, 2]));

module.exports = {
  insertionSort,
};
