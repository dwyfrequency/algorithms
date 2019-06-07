var findAnagrams = function(s, p) {
  const startIdxArr = [];
  let startPointer = 0;
  let rightPointer = startPointer + 1;
  while (rightPointer < s.length) {
    if (!p.includes(s[startPointer])) {
      startPointer++;
      rightPointer++;
    } else if (p.includes(s[rightPointer])) {
      const dif = rightPointer - startPointer + 1;
      if (p.length === dif) {
        if (
          p
            .split('')
            .sort()
            .join('') ===
          s
            .substring(startPointer, rightPointer + 1)
            .split('')
            .sort()
            .join('')
        ) {
          startIdxArr.push(startPointer);
          startPointer++;
          rightPointer = startPointer + 1;
        } else {
          startPointer++;
          rightPointer++;
        }
      } else if (p.length > dif) {
        rightPointer++;
      } else {
        startPointer++;
      }
    } else if (!p.includes(s[rightPointer])) {
      startPointer += rightPointer + 1;
      rightPointer += startPointer;
    }
  }
  return startIdxArr;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
