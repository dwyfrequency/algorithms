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
    for (let i = 1; i < arr.length; i++) {}
  }
};

module.exports = {
  insertionSort,
};
