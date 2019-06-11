function jumpingOnClouds(arr) {
  let cnt = 0;
  //
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 2] === 0) {
      i++;
    }
    cnt++;
  }
  return cnt;
}

// Time O(N) | Space O(1)
function jumpingOnCloudsWhileLoop(c) {
  let leftMostPointer = 0;
  let stepCnt = 0;
  while (leftMostPointer !== c.length - 1) {
    if (c[leftMostPointer + 2] === 0) {
      leftMostPointer += 2;
    } else if (c[leftMostPointer + 1] === 0) {
      leftMostPointer += 1;
    }
    stepCnt++;
  }
  return stepCnt;
}

console.log(jumpingOnCloudsWhileLoop([0, 0, 1, 0, 0, 1, 0]));
