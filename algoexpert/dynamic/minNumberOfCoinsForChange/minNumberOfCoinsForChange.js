function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  denoms.sort((a, b) => a - b);
  const arr = Array.from({ length: n + 1 });
  for (let denomIdx = 0; denomIdx < denoms.length; denomIdx++) {
    // const element = array[i];
    for (let arrIdx = 0; arrIdx < arr.length; arrIdx++) {
      const floor = Math.floor(arrIdx / denoms[denomIdx]);
      const remain = arrIdx - floor * denoms[denomIdx];
      const cnt = floor + (arr[remain] ? arr[remain] : 0);
      if (!arr[arrIdx]) {
        arr[arrIdx] = cnt;
      } else if (arr[arrIdx] > cnt) {
        arr[arrIdx] = arr[arrIdx] > cnt ? cnt : arr[arrIdx];
      }
    }
  }
  return arr[n];
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));

// Do not edit the line below.
module.exports = { minNumberOfCoinsForChange };
