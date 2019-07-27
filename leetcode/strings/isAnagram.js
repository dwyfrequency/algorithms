/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const frequencyCounter = {};
  for (const ch of s) {
    if (frequencyCounter[ch]) frequencyCounter[ch] += 1;
    else frequencyCounter[ch] = 1;
  }
  for (const ch of t) {
    if (frequencyCounter[ch] <= 0) return false;
    else if (frequencyCounter[ch] === undefined) return false;
    else frequencyCounter[ch] -= 1;
  }

  return true;
};
