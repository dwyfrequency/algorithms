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

// 1,1,1,1
// 1,1,2
// 2, 2
// 4
console.log(numberOfWaysToMakeChangeRecursive(4, [1, 2, 4]));
