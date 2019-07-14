function getPermutations(remainingArr, builtPermArr = [], permsArr = []) {
  // Write your code here.
  if (remainingArr.length === 1) {
    permsArr.push(builtPermArr.concat(remainingArr));
    return permsArr;
  }
  remainingArr.forEach((num, idx) => {
    builtPermArr.push(num);
    getPermutations(
      remainingArr.slice(0, idx).concat(remainingArr.slice(idx + 1)),
      builtPermArr,
      permsArr
    );
    builtPermArr.pop();
  });
  return permsArr;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
