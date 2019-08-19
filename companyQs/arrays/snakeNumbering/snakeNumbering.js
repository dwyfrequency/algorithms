// Time O(n*m) | Space O(n*m)
const snakeNumbering = (row, col) => {
  if (row === 0 || col === 0) {
    return Array.from({ length: row || col }, (_, idx) => idx + 1);
  }
  const returnArr = Array.from({ length: row }, () =>
    Array.from({ length: col })
  );
  let direction = 'D';
  let rowIdx = 0,
    colIdx = 0,
    counter = 1;
  while (colIdx < col) {
    if (direction === 'D') {
      while (rowIdx < row) {
        returnArr[rowIdx][colIdx] = counter;
        counter++;
        rowIdx++;
      }
      rowIdx--;
      direction = 'U';
    } else {
      while (rowIdx >= 0) {
        returnArr[rowIdx][colIdx] = counter;
        counter++;
        rowIdx--;
      }
      rowIdx++;
      direction = 'D';
    }
    colIdx++;
  }
  return returnArr;
};

exports.snakeNumbering = snakeNumbering;
