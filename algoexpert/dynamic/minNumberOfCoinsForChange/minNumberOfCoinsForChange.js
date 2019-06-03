// Time O(N * D) | Space O(N)
// N is the target and D is the len of the denomArr
const minNumberOfCoinsForChangeAlgoExp = (target, denomArr) => {
  const coinsPerValueArr = Array.from({ length: target + 1 }, () => Infinity);
  coinsPerValueArr[0] = 0;
  for (let denom of denomArr) {
    for (
      let coinCntIndex = 1;
      coinCntIndex < coinsPerValueArr.length;
      coinCntIndex++
    ) {
      if (denom <= coinCntIndex) {
        const dif = coinCntIndex - denom;
        coinsPerValueArr[coinCntIndex] = Math.min(
          coinsPerValueArr[coinCntIndex],
          1 + coinsPerValueArr[dif]
        );
      }
    }
  }
  return coinsPerValueArr[target] === Infinity ? -1 : coinsPerValueArr[target];
};

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));

// Do not edit the line below.
module.exports = { minNumberOfCoinsForChange };
