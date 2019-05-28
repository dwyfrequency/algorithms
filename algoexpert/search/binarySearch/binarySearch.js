function binarySearch(array, target) {
  // Write your code here.
  let leftPointer = 0,
    rightPointer = array.length - 1;
  while (leftPointer <= rightPointer) {
    const middleIndex = Math.floor((leftPointer + rightPointer) / 2);
    const midVal = array[middleIndex];
    if (midVal === target) return middleIndex;
    if (midVal > target) {
      rightPointer = middleIndex - 1;
    } else {
      leftPointer = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 5, 7, 111], 111));

// Do not edit the line below.
exports.binarySearch = binarySearch;
