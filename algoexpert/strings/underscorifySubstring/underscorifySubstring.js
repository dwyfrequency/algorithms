/**
 * Wrap Substring in with beginning and ending '_'
 * If substring is adjacent or overlapping, place '_' at the end of the combined
 * return new underscorified string
 *
 * THOUGHTS
 * 1. iterate through each item the length of the substring
 * 2. check if the substring matches
 * 3. if the substring matches, we want to check whether we are adj or overlapping
 * 4. if so modify both
 *   */

const checkOverLapping = (startIdx, substring) => {
  const curSub = string.slice(leftPnt, leftPnt + subLen);
  const rightPntNonInclusive = leftPnt + subLen;
};

function underscorifySubstring(string, substring) {
  // Write your code here.
  let leftPnt = 0;
  const subLen = substring.length;
  const strLen = string.length;
  while (leftPnt <= strLen - subLen) {
    // 'aba' : 3, 'ab' : 2
    const curSub = string.slice(leftPnt, leftPnt + subLen);
    const rightPntNonInclusive = leftPnt + subLen;
    if (curSub === substring) {
      checkOverLapping(rightPntNonInclusive - 1, substring);
    }
  }
}

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;
