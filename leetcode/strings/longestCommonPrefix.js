/**
 * @param {string[]} strs
 * @return {string}
 */
// Time O(n^2) | Space O(n)
var longestCommonPrefix = function(strs) {
  let subStringMatch = strs[0] || '';
  for (const str of strs) {
    for (let i = 0; i < subStringMatch.length; i++) {
      if (subStringMatch[i] !== str[i]) {
        subStringMatch = subStringMatch.slice(0, i);
        break;
      }
    }
  }
  return subStringMatch;
};
