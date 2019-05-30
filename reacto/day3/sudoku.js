/*
Prompt
Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:

Every row must contain the numbers from 1-9 (no repeats)
Every column must also contain every number from 1-9
Every 3x3 subgroup/square must contain each number from 1-9
Representing the Data
Your input is a 2-D array that represents a 9x9 matrix. For example:


starting index [0,]

var solution = [
 [5,3,4,6,7,8,9,1,2],
 [6,7,2,1,9,5,3,4,8],
 [1,9,8,3,4,2,5,6,7],
 [8,5,9,7,6,1,4,2,3],
 [4,2,6,8,5,3,7,9,1],
 [7,1,3,9,2,4,8,5,6],
 [9,6,1,5,3,7,2,8,4],
 [2,8,7,4,1,9,6,3,5],
 [3,4,5,2,8,6,1,7,9]
];
// valid
[1, 2, 3]
[5, 6, 7]
[8, 9, 4]

// invalid
[1, 2, 3]
[5, 1, 7]
[8, 9, 4]
*/

const sudoku = arr => {
   for(let i = 0; i < arr.length; i++) {
     for(let j = 0; j < arr[0].length; j++) {

     }
   }
  // let startRowIdx = 0,
  //   startColIdx = 0;
  // while (startColIdx !== 9 && startRowIdx !== 9) {
  //   const startValue = arr[startRowIdx][startColIdx];
  //   for (let i = 1; i < 9; i++) {
  //     if (arr[startRowIdx] !== undefined) {
  //       if (
  //         startValue === arr[startRowIdx + i] ||
  //         startValue === arr[startRowIdx][startColIdx + i]
  //       ) {
  //         return false;
  //       }
  //     }
  //   }
  //   startRowIdx++;
  //   startColIdx++;

  }

  return true;
};
