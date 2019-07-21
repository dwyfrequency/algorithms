// Time O(n * m) | Space O(1)
const indexOf = (str, searchStr) => {
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

exports.indexOf = indexOf;
