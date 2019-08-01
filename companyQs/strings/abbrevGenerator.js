// [book, cat, interveel, interveal, lookook, loooook]
// [b2k, cat, interveel, interveal, look2k,looo2k]

/* RULES
1. abbrev has to be shorter than the original else return orig
2. abbrev will include the number of characters between the start and end
3. if two abbrevs conflict, generate a new abbrev that conforms. (make sure adheres to rule 1 & 2)
*/
const resolveAbbrevConflict = (str1, str2) => {
  let counter = 1;
  while (str1[counter] === str2[counter]) counter++;
  // have to add 2 b/c counter 0 is the first char so we need to add 1,
  // and add another 1 b/c of the last ch in the str
  const delta = counter + 2;
  const str1Abbrev = str1.slice(0, counter + 1) + delta + str1.slice(-1);
  const str2Abbrev = str2.slice(0, counter + 1) + delta + str2.slice(-1);
  return str1.length === str1Abbrev.length
    ? [str1, str2]
    : [str1Abbrev, str2Abbrev];
};

const generateNewAbbrev = str => {
  // minus 2, because we have one character for the start and one for the end
  // leaving the len -2 as the remaining char len
  const delta = str.length - 2;
  return str[0] + delta + str[str.length - 1];
};

const abbrevGenerator = arr => {
  const abbrevReturnArr = [];
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currStr = arr[i];
    if (currStr <= 3) {
      abbrevReturnArr.push(currStr);
    } else {
      const curAbbrev = generateNewAbbrev(arr[i]);
      if (hashMap[curAbbrev] !== undefined) {
        const oldIdx = hashMap[curAbbrev];
        const [newPrevAbbrev, newCurAbbrev] = resolveAbbrevConflict(
          arr[oldIdx],
          arr[i]
        );
        abbrevReturnArr[oldIdx] = newPrevAbbrev;
        abbrevReturnArr[i] = newCurAbbrev;
      } else {
        abbrevReturnArr.push(curAbbrev);
        hashMap[curAbbrev] = i;
      }
    }
  }
  return abbrevReturnArr;
};
