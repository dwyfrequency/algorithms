/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrEasiest = function(haystack, needle) {
  return haystack.indexOf(needle);
};

// eslint-disable-next-line complexity
var strStrBlem = function(haystack, needle) {
  if (haystack.length < needle.length) return -1;
  if (!needle || haystack === needle) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, needle.length) === needle) return i;
  }
  return -1;
};

// Time O(h*n) | Space O(h)
var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) return -1;
  if (!needle || haystack === needle) return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      const slice = haystack.slice(i, i + needle.length);
      if (slice === needle) return i;
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'));
