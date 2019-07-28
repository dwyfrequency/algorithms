function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // max will either be the max before this slot + 1 or the current location * 2
  const arrLen = A.length;
  // const maxArr = Array.from({ length: arrLen }, () => -Infinity);
  let maxVal = -Infinity;
  for (let i = 0; i < arrLen; i++) {
    for (let k = i; k < arrLen; k++) {
      maxVal = Math.max(maxVal, A[i] + A[k] + (k - i));
    }
  }
  return maxVal;
}

console.log(solution([1, 3, -3])); // 6
console.log(solution([4, 5, 1, 4])); // 11
