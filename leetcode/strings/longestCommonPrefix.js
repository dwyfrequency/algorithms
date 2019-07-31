/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length)
    let subStringMatch = strs[0] || ""
    for(const str of strs) {
      for(let i = 0; i < subStringMatch.length; i++) {
        if(subStringMatch[i] != str[i]) {
          subStringMatch = subStringMatch.slice(0,i)
          break
        }
      }
    }
  return subStringMatch
};