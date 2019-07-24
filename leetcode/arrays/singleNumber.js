// Time O(N) | Space O(n/2)
// n/2 so our hash map will only include half the arr
const singleNumber = arr => {
  const hashMap = {};
  for (const item of arr) {
    if (hashMap[item]) hashMap[item] += 1;
    else hashMap[item] = 1;
  }
  for (const [key, val] of Object.entries(hashMap)) {
    if (val === 1) return key;
  }
  return -1;
};

console.log(singleNumber([1, 1, 2, 2, 3, 4, 4]));
