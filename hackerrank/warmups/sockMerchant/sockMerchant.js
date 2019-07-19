// Time O(n) | Space O(n)
function sockMerchant(n, ar) {
  let pairCnt = 0;
  const frequencyCnt = {};
  for (const sock of ar) {
    if (frequencyCnt[sock]) {
      pairCnt += 1;
      frequencyCnt[sock] = 0;
    } else {
      frequencyCnt[sock] = 1;
    }
  }
  return pairCnt;
}
