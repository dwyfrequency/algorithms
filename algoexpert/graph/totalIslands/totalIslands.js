/*
1. create duplicate array to track nodes you've visited
2. iterate through the current array, and do a dfs on any non-visited
3. create a stack to keep track of nodes to visit
4. check whether indices in the stack have been have been visited
5. if it has not been visited and it is an island (1), get neighbors UP, Down, etc
6. add neighbors to queue

*/

const getNeighbors = (row, col, arr) => {
  const returnArr = [];
  // UP
  if (row > 0 && arr[row - 1][col]) {
    returnArr.push([row - 1, col]);
  }
  // DOWN
  if (row < arr.length - 1 && arr[row + 1][col]) {
    returnArr.push([row + 1, col]);
  }
  // LEFT
  if (col > 0 && arr[row][col - 1]) {
    returnArr.push([row, col - 1]);
  }
  // RIGHT
  if (col < arr[0].length - 1 && arr[row][col + 1]) {
    returnArr.push([row, col + 1]);
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
  let totalIslandsCnt = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (visitedArr[row][col]) continue;
      totalIslandsCnt += exploreNode(row, col, visitedArr, arr);
    }
  }
  return totalIslandsCnt;
};

console.log(totalIslands([[1, 0, 1], [0, 1, 1]]));

exports.totalIslands = totalIslands;
