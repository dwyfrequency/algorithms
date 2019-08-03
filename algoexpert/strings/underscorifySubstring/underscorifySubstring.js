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

const checkOverLapping = (startIdx, substring, string) => {
  const subLen = substring.length;
  const curSub = string.slice(startIdx, startIdx + subLen);
  const rightPntNonInclusive = startIdx + subLen;
  return string.slice(startIdx, rightPntNonInclusive);
};

function underscorifySubstring(string, substring) {
  // Write your code here.
  let leftPnt = 0;
  const subLen = substring.length;
  const strLen = string.length;
  let finalStr = '';
  while (leftPnt <= strLen - subLen) {
    // 'aba' : len(3), 'ab' : len(2)
    const curSub = string.slice(leftPnt, leftPnt + subLen);
    let rightPntNonInclusive = leftPnt + subLen; // ie it is one ch/idx past
    if (curSub === substring) {
      // by - 1, we make it inclusive
      while (
        checkOverLapping(rightPntNonInclusive - 1, substring, string) ===
        substring
      ) {
        rightPntNonInclusive = (rightPntNonInclusive - 1) * 2;
      }
      // finalStr += `_${string.slice(leftPnt, rightPntNonInclusive - )}_`;
    }
  }
}

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;
