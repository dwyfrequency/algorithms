const indexOf = (str, searchStr) => {
  if (str.length > searchStr.length) return -1;
  let foundIdx = -1,
    pnt = 0;
  while (pnt < searchStr.length) {
    if (searchStr[pnt] !== str[0]) {
      pnt++;
    } else {
      foundIdx = pnt;
      for (let i = 1; i < str.length; i++) {
        if (str[i] !== searchStr[pnt + i]) {
          foundIdx = -1;
          pnt++;
          break;
        }
      }
    }
    if (foundIdx !== -1) return foundIdx;
  }
  return foundIdx;
};

exports.indexOf = indexOf;
