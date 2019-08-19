const snakeNumbering = (row, col) => {
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
        returnArr[rowIdx] = counter;
        counter++;
        rowIdx++;
      }
      rowIdx--;
      direction = 'U';
    } else {
      while (rowIdx >= 0) {
        returnArr[rowIdx] = counter;
        counter++;
        rowIdx--;
      }
      rowIdx++;
      direction = 'D';
    }
    colIdx++;
  }
};

exports.snakeNumbering = snakeNumbering;
