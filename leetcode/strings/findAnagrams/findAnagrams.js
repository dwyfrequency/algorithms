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
      startPointer++;
      rightPointer += 1;
    }
  }
  return startIdxArr;
};

var findAnagramsIter = function(
  s,
  p,
  leftPointer = 0,
  rightPointer = 1,
  startIdxArr = []
) {
  while (rightPointer < s.length) {
    const lenDif = rightPointer - leftPointer;
    if (lenDif < p.length) {
      rightPointer++;
    } else if (lenDif === p.length) {
      const potentialAnagram = s.slice(leftPointer, rightPointer);
      let match = true;
      for (const char of p) {
        if (!potentialAnagram.includes(char)) {
          match = false;
          break;
        }
      }
      if (match) {
        startIdxArr.push(leftPointer);
      }
      ++leftPointer;
      ++rightPointer;
    } else {
      leftPointer++;
    }
  }
  return startIdxArr;
};

console.log(findAnagramsIter('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagramsIter('acdcaeccde', 'c'));
