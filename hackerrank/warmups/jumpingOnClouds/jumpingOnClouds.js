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

// Complete the jumpingOnClouds function below.
function jumpingOnCloudsDifWhile(c) {
  let leftIdx = 0,
    cnt = 0;
  // to prevent off by one error, we need to reduce by 1
  // this is because we want to exactly at the last index and not
  // generate any steps past that
  while (leftIdx < c.length - 1) {
    // if + 2 does not equal 1, we should take 2 steps even if it's undefined
    // our will loop will kill us once our leftIdx is equal to or greater than
    // our length
    leftIdx += c[leftIdx + 2] === 1 ? 1 : 2;
    cnt++;
  }
  return cnt;
}
console.log(jumpingOnCloudsWhileLoop([0, 0, 1, 0, 0, 1, 0]));
