// Time O(n * m) | Space O(1)
const indexOfMehSolution = (str, searchStr) => {
  // if the str we're searching for (str) is longer than the searched str
  // return -1
  if (str.length > searchStr.length) return -1;
  let foundIdx = -1,
    pnt = 0;
  while (pnt < searchStr.length) {
    // increment the pnt each time the first letter doesnt match
    if (searchStr[pnt] !== str[0]) {
      pnt++;
    } else {
      // once we've found a matching first letter, loop through each
      // remaining ch of substring to see if it matches
      foundIdx = pnt;
      for (let i = 1; i < str.length; i++) {
        if (str[i] !== searchStr[pnt + i]) {
          foundIdx = -1;
          pnt++;
          break;
        }
      }
    }
    // if we've looped through entire substring and not reset
    // foundIdx then we're got a match
    if (foundIdx !== -1) return foundIdx;
  }
  return foundIdx;
};

const indexOf = (str, searchStr) => {
  // 5 - 3 = 2  => + 1 => 3. Without the +1, we'll have off by one err
  const searchLen = searchStr.length - str.length + 1;
  for (let i = 0; i < searchLen; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== searchStr[j + i]) break;
      if (j + 1 === str.length) return i;
    }
  }
  return -1;
};

/**
 * jest ./indexOf.test.js
 */

exports.indexOf = indexOf;
