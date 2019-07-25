// Time O(n + m) | Space O(m)
// m being the smaller arr
// eslint-disable-next-line complexity
const intersection = (arr1, arr2) => {
  const retArr = [];
  const counter = {};
  if (arr1.length > arr2.length) {
    for (const val of arr2) {
      if (counter[val] !== undefined) counter[val] += 1;
      else counter[val] = 1;
    }
    for (const val of arr1) {
      if (counter[val] > 0) {
        retArr.push(val);
        counter[val] -= 1;
      }
    }
  } else {
    for (const val of arr1) {
      if (counter[val] !== undefined) counter[val] += 1;
      else counter[val] = 1;
    }
    for (const val of arr2) {
      if (counter[val] > 0) {
        retArr.push(val);
        counter[val] -= 1;
      }
    }
  }
  return retArr;
};
