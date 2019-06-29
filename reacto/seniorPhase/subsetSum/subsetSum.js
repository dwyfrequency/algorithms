// https://gist.github.com/alvinjtang/bf23f8f3c68bd87564b354cfc0f09bd0
// subsetSum(17, [1, 10, 5, 3]
const subsetSum = (target, arr) => {
  const possibleSums = new Set([0]);
  for (const num of arr) {
    const currentPossibleSums = new Set(possibleSums);
    for (const sum of currentPossibleSums) {
      const newSum = num + sum;
      if (newSum === target) return true;
      if (newSum < target) possibleSums.add(newSum);
    }
  }
  return false;
};

console.log(subsetSum(17, [1, 10, 5, 3])); // false
console.log(subsetSum(16, [1, 10, 5, 3])); // true
