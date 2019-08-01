// eslint-disable-next-line complexity
const getNeighbors = (row, col, arr) => {
  // get all the nodes with 1s and return it in an arr
  // for further exploration
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

const exploreNode = (rowIdx, colIdx, visitedArr, arr) => {
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
// Time O(w*h) | Space O(w*h)
const riverSizes = arr => {
  // create matrix saying whether the node has been visited before
  const visitedArr = arr.map(innerArr => innerArr.map(_ => false));
  const sizes = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (visitedArr[row][col]) continue;
      // each nonvisited node, explore it
      const size = exploreNode(row, col, visitedArr, arr);
      if (size) sizes.push(size);
    }
  }
  return sizes;
};

console.log(riverSizes([[1, 0], [0, 1]]));

module.exports = { riverSizes };
