/**
 * @param {string} s
 * @return {number}
 */
// Time O(n) | Space O(n/2)
var firstUniqCharHashMap = function(s) {
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

// Time O(n^2) | Space O(1)
var firstUniqChar = function(s) {
  for (const ch of s) {
    const idx = s.indexOf(ch);
    if (idx === s.lastIndexOf(ch)) return idx;
  }
  return -1;
};
