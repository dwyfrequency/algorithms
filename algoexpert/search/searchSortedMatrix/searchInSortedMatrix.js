function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    const idx = binarySearch(matrix[i], target);
    if (idx) {
      return [i, idx];
    }
  }
  return [-1, -1];
}

function binarySearch(arr, target) {
  let leftPnt = 0,
    rightPnt = arr.length - 1;
  while (leftPnt <= rightPnt) {
    const middlePnt = leftPnt + Math.floor((rightPnt - leftPnt) / 2);
    const midValue = arr[middlePnt];
    if (midValue === target) {
      return middlePnt;
    } else if (midValue < target) {
      leftPnt = middlePnt + 1;
    } else {
      rightPnt = middlePnt - 1;
    }
  }
  return false;
}
console.log(binarySearch([1, 3, 4, 5, 7], 3));
console.log(binarySearch([1, 3, 4, 5, 7], 7));
console.log(binarySearch([1, 3, 4, 5, 7], 5));

exports.binarySearch = binarySearch;

exports.searchInSortedMatrix = searchInSortedMatrix;
