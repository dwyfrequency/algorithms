/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const hashMap = {};
  for (const ch of s) {
    if (hashMap[ch]) hashMap[ch] += 1;
    else hashMap[ch] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === 1) return i;
  }
  return -1;
};
