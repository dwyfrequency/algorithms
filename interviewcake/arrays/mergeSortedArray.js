const mergeArrays = (arr1, arr2) => {
  let arr1Pnt = 0,
    arr2Pnt = 0;
  const mergedArr = [];
  while (arr1Pnt < arr1.length && arr2Pnt < arr2.length) {
    if (arr1[arr1Pnt] <= arr2[arr2Pnt]) {
      mergedArr.push(arr1[arr1Pnt]);
      arr1Pnt++;
    } else {
      mergedArr.push(arr2[arr2Pnt]);
      arr2Pnt++;
    }
  }
  arr1Pnt === arr1.length
    ? mergedArr.push(...arr2.slice(arr2Pnt))
    : mergedArr.push(...arr1.slice(arr1Pnt));
  return mergedArr;
};

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
