const factorial = n => {
  if (n === 1) {
    return 1;
  }
  return n * calcPermutations(n - 1);
};

const getPermutations = arr => {
  if (!arr.length) return [];
  const permutationNum = factorial(arr.length);
};

module.exports = { getPermutations };
