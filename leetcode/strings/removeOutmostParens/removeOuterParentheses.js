/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const results = [];
  let openCnt = 0,
    closeCnt = 0,
    startTrimIdx = 0;
  for (let i = 0; i < S.length; i++) {
    // if open
    if (S[i] === '(') {
      if (openCnt === 0) {
        startTrimIdx = i + 1;
      }
      openCnt++;
    } else {
      closeCnt++;
    }
    // if there is an even amount of open/close parans
    if (openCnt === closeCnt) {
      results.push(S.substring(startTrimIdx, i));
      startTrimIdx = 0;
      openCnt = 0;
      closeCnt = 0;
    }
  }
  return results.join('');
};
