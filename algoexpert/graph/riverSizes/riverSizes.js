// eslint-disable-next-line complexity
const getNeighbors = (row, col, arr) => {
  const retArr = [];
  // UP
  if (row > 0 && arr[row - 1][col]) retArr.push([row - 1, col]);
  // Down
  if (row < arr.length - 1 && arr[row + 1][col]) retArr.push([row + 1, col]);
  // Left
  if (col > 0 && arr[row][col - 1]) retArr.push([row, col - 1]);
  // Right
  if (col < arr[0].length - 1 && arr[row][col + 1]) retArr.push([row, col + 1]);
  return retArr;
};

const exploreNode = (rowIdx, colIdx, visitedArr, sizes, arr) => {
  // DFS
  const stack = [[rowIdx, colIdx]];
  let riverSize = 0;
  while (stack.length) {
    const currNode = stack.pop();
    const [currRow, currCol] = currNode;
    // have we already visited it, then skip
    if (visitedArr[currRow][currCol]) continue;
    visitedArr[currRow][currCol] = true;
    // does it contain a zero, then skip
    if (!arr[currRow][currCol]) continue;
    riverSize += 1;
    stack.push(...getNeighbors(currRow, currCol, arr));
  }
  return riverSize;
};
// [[]] => []
const riverSizes = arr => {
  const visitedArr = arr.map(innerArr => innerArr.map(_ => false));
  const sizes = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (visitedArr[row][col]) continue;
      const size = exploreNode(row, col, visitedArr, sizes);
      if (size) sizes.push(size);
    }
  }
  return sizes;
};
