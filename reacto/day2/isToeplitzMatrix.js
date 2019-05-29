var isToeplitzMatrix = function(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (
        matrix[row + 1] === undefined ||
        matrix[row + 1][col + 1] === undefined
      ) {
        continue;
      }

      if (matrix[row + 1][col + 1] !== matrix[row][col]) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([[36, 86, 7, 94, 71, 59, 10], [19, 0, 86, 7, 94, 71, 59]])
);
