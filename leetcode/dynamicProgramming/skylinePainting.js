function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arrLen = A.length;
  let strokeCnt = 0;
  while (Math.max(...A) > 0) {
    for (let i = 0; i < arrLen; i++) {
      if (A[i] > 0) {
        if (A[i + 1] && A[i + 1] > 0) {
          A[i] -= 1;
          continue;
        } else {
          A[i] -= 1;
          strokeCnt++;
        }
      }
    }
  }
  return strokeCnt;
}

const tough = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]; //  9
const easier = [5, 8]; // 8
const easiest = [1, 1, 4]; // 4

console.log(solution([4, 1, 4])); // 7
