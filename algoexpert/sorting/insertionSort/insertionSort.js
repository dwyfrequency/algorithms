const insertionSort = arr => {
  if (!arr.length) return arr;

  let sorted = false;
  const newArr = [];
  while (!sorted) {
    const half = Math.ceil(arr.length / 2);
    const arr1 = arr.slice(0, half),
      arr2 = arr.slice(half);
    for (let i = 0; i < arr.length; i++) {}
  }
};

module.exports = {
  insertionSort,
};
