// Algo Prompt: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function jumpingOnClouds(arr) {
  let cnt = 0;
  // we do arr.length - 1 b/c we want to stop counting when we reach the last idx
  for (let i = 0; i < arr.length - 1; i++) {
    // if i + 2 === 0, we can advance two spaces. We increment +1 in loop b/c
    // the for loop will increment it again giving us +2
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
