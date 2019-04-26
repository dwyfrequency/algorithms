function twoNumberSum(array, targetSum) {
  // Write your code here.
  // (O)n^2 solution
  // for(let i = 0; i < array.length; i++) {
  // 	for(let j = i + 1; j < array.length; j++) {
  // 		if(targetSum === array[i] + array[j]) {
  // 			return [array[i], array[j]].sort((a, b) => a - b);
  // 		}
  // 	}
  // }
  // return []

  // (O)n time O(n) space solution
  const hashMap = {};
  for (let i of array) {
    const desiredNum = targetSum - i;
    if (hashMap[desiredNum] !== undefined) {
      return i > desiredNum ? [desiredNum, i] : [i, desiredNum];
    }
    hashMap[i] = i;
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 10], 10));

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
