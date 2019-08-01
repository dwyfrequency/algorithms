const getNeighbors = params => {};

const exploreNode = (rowIdx, colIdx, visitedArr, sizes) => {
  // DFS
  const stack = [[rowIdx, colIdx]];
};

// [[]] => []
const riverSizes = arr => {
  const visitedArr = arr.map(innerArr => innerArr.map(_ => false));
  const sizes = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (visitedArr[row][col]) continue;
      exploreNode(row, col, visitedArr, sizes);
    }
  }
};
