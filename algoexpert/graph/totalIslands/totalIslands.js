const getNeighbors = (row, col, arr) => {
  const returnArr = [];
  // UP
  if (row > 0 && arr[row - 1][col]) {
    returnArr.push([row - 1, col]);
  }
  // DOWN
  if (row < arr[0].length - 1 && arr[row + 1][col]) {
    returnArr.push([row + 1, col]);
  }
  // LEFT
  if (col > 0 && arr[row][col - 1]) {
    returnArr.push([row][col - 1]);
  }
  // RIGHT
  if (col < arr.length - 1 && arr[row][col + 1]) {
    returnArr.push([row][col + 1]);
  }
  return returnArr;
};

const exploreNode = (rowIdx, colIdx, visitedArr, arr) => {
  let island = false;
  const stack = [[rowIdx, colIdx]];
  while (stack.length) {
    const curNode = stack.pop();
    const [row, col] = curNode;
    if (visitedArr[row][col]) continue;
    visitedArr[row][col] = true;
    if (!arr[row][col]) continue;
    island = true;
    stack.push(...getNeighbors(row, col, arr));
  }
  return island ? 1 : 0;
};

const totalIslands = arr => {
  const visitedArr = arr.map(innerArr => innerArr.map(_ => false));
  let totalIslands = 0;
  for (let col = 0; col < arr.length; col++) {
    for (let row = 0; row < arr[0].length; row++) {
      if (visitedArr[row][col]) continue;
      totalIslands += exploreNode(row, col, visitedArr, arr);
    }
  }
  return totalIslands;
};

exports.totalIslands = totalIslands;
