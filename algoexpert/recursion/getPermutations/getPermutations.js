const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * calcPermutations(n - 1);
};

const getPermutations = arr => {
  if (!arr.length) return [];
  const arrLen = factorial(arr.length);
  for(let i = 0; i < arrLen; i++) {
    for(let )
  }
};

module.exports = { getPermutations };
