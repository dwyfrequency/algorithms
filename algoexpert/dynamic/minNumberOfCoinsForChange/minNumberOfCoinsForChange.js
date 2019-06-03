// Time O(N * D) | Space O(N)
// N is the target and D is the len of the denomArr
/* Approach is create an array the length of the target + 1. We add the one so we can have an index that equals the target
For each denom we have, we calculate how many coins we would need to reach our index value.
By populating the index values, we can easily look up how many coins we need to fill the remaider
Example:
([2, 4, 5], 7)
coinsPerValueArr ->
[0, Infinity, 1, Infinity, 1, 5, Infinity, 7  ]
 0    1       2   3        4  1            2
 return 2
*/
const minNumberOfCoinsForChangeAlgoExp = (target, denomArr) => {
  const coinsPerValueArr = Array.from({ length: target + 1 }, () => Infinity);
  coinsPerValueArr[0] = 0; // init as we'll never have denom of 0
  for (let denom of denomArr) {
    // init to 1 b/c idx 0 will always be 0
    for (
      let coinCntIndex = 1;
      coinCntIndex < coinsPerValueArr.length;
      coinCntIndex++
    ) {
      // if the denomination is less than the index - calc the difference
      if (denom <= coinCntIndex) {
        const remainder = coinCntIndex - denom;
        // what is the minimum cnt out of the current and calculated
        // the difference is our remaining value.
        coinsPerValueArr[coinCntIndex] = Math.min(
          coinsPerValueArr[coinCntIndex],
          1 + coinsPerValueArr[remainder]
        );
      }
    }
  }
  // if we could not reach the target with our denoms, return -1 else return the cnt
  return coinsPerValueArr[target] === Infinity ? -1 : coinsPerValueArr[target];
};

console.log(minNumberOfCoinsForChangeAlgoExp(7, [1, 5, 10]));

// Do not edit the line below.
module.exports = { minNumberOfCoinsForChangeAlgoExp };
