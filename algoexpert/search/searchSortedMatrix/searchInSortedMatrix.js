function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    const idx = binarySearch(matrix[i], target);
    if (idx !== false) {
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

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];

searchInSortedMatrix(matrix, 1);

exports.binarySearch = binarySearch;

exports.searchInSortedMatrix = searchInSortedMatrix;
