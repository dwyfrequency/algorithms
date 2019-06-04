// Time O(N * D)
// target number *
const numberOfWaysToMakeChangeRecursive = (
  target,
  denoms,
  currentCoinIdx = 0
) => {
  if (target === 0) {
    return 1;
  }

  if (target < 0) {
    return 0;
  }
  let cnt = 0;
  for (let index = currentCoinIdx; index < denoms.length; index++) {
    cnt += numberOfWaysToMakeChangeRecursive(
      target - denoms[index],
      denoms,
      index
    );
  }
  return cnt;
};

const numberOfWaysToMakeChangeRecursivePt2 = (
  target,
  denoms,
  arrLen = denoms.length
) => {
  // If target is 0 then there is 1 solution
  if (target === 0) {
    return 1;
  }
  // If target is less than 0 then dont count
  if (target < 0) {
    return 0;
  }
  // if we are out of demons and target is greate than 0, there are no solutions
  if (arrLen <= 0 && target > 0) {
    return 0;
  }

  /* first call: change the coin being used
     second call: reduce the target
     Examples target: 4, denoms: [1, 2, 4]
     */
  return (
    numberOfWaysToMakeChangeRecursivePt2(target, denoms, arrLen - 1) +
    numberOfWaysToMakeChangeRecursivePt2(
      target - denoms[arrLen - 1],
      denoms,
      arrLen
    )
  );
};
// 1 1 1 1 1
// 1 4
// [1,  1,  1,  1,  2,  2]
// [0,   1,  2,  3,  4,   5]
// Test case [1,4 6], 5
// Solution 2
const numberOfWaysToMakeChangeIterative = (target, denoms) => {
  /* create an array with the indexes representing the total coin cnt. Make sure to initialize idx 0 to 1
  For each denom, we minus it from the currentCoin index which gives us the remainder.
  We add the remainder to the current cnt at the location.
  If the subtraction equals 0, we just add the 1. Any amount of coins it takes to get the remainder, we add it. */
  const coinCntPerIdxArr = Array.from({ length: target + 1 }, () => 0);
  coinCntPerIdxArr[0] = 1;
  for (const denom of denoms) {
    for (
      let coinCntIdx = 1;
      coinCntIdx < coinCntPerIdxArr.length;
      coinCntIdx++
    ) {
      if (coinCntIdx >= denom) {
        coinCntPerIdxArr[coinCntIdx] += coinCntPerIdxArr[coinCntIdx - denom];
      }
    }
  }
  return coinCntPerIdxArr[target];
};

// 1,1,1,1
// 1,1,2
// 2, 2
// 4
console.log(numberOfWaysToMakeChangeRecursivePt2(4, [1, 2, 4]));
