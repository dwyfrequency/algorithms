/*
Given two sorted arrays of numbers, return an array containing all values that appear in both arrays. The numbers in the resulting array (the "intersection") may be returned in any order, they needn't be sorted.

You can assume that each array has only unique values (no duplicates within the array).

Follow-up: now consider what you might do if the given arrays are not sorted.
*/

/**
 * Example
 *  [0, 1, 5, 6], [2, 5, 7] -> [5]
 *  [1, 3, 5, 8], [2, 5, 7, 8] -> [5, 8]
 */

//  Time O(N) | Space O(N) - Solution works when sorted
// (arr, arr) -> arr
const intersection = (arr1, arr2) => {
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  const intersectionArr = [];
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    const arr1IdxVal = arr1[arr1Pointer];
    const arr2IdxVal = arr2[arr2Pointer];
    if (arr1IdxVal === arr2IdxVal) {
      intersectionArr.push(arr1IdxVal);
      arr1Pointer++;
      arr2Pointer++;
    }
    if (arr1IdxVal < arr2IdxVal) arr1Pointer++;
    if (arr1IdxVal > arr2IdxVal) arr2Pointer++;
  }
  return intersectionArr;
};

console.log(intersection([0, 1, 5, 6], [2, 5, 7])); //-> [5]
console.log(intersection([1, 3, 5, 8], [2, 5, 7, 8])); // -> [5, 8]

// If NOT sorted
// O(N)
const intersectionNotSorted = (arr1, arr2) => {
  const counter = {};
  const intersectionArr = [];
  for (const num of arr1) {
    counter[num] = 1;
  }
  for (const num of arr2) {
    if (counter[num]) intersectionArr.push(num);
  }
  return intersectionArr;
};

console.log(intersectionNotSorted([0, 1, 5, 6], [2, 5, 7])); //-> [5]
console.log(intersectionNotSorted([1, 3, 5, 8], [2, 5, 7, 8])); // -> [5, 8]

function intersectionEs6(arrA, arrB) {
  const smaller = arrB.length < arrA.length ? arrB : arrA;
  const larger = arrB.length >= arrA.length ? arrB : arrA;

  const setSmaller = new Set(smaller);

  return larger.filter(elem => setSmaller.has(elem));
}
