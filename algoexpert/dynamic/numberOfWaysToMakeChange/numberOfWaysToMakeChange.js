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

// 1,1,1,1
// 1,1,2
// 2, 2
// 4
console.log(numberOfWaysToMakeChangeRecursivePt2(4, [1, 2, 4]));
