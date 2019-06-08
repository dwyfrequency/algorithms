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
  rightPointer = p.length,
  startIdxArr = []
) {
  const anagramSorted = p
    .split('')
    .sort()
    .join('');
  while (rightPointer <= s.length) {
    s
      .slice(leftPointer, rightPointer)
      .split('')
      .sort()
      .join('') === anagramSorted && startIdxArr.push(leftPointer);
    ++leftPointer;
    ++rightPointer;
  }
  return startIdxArr;
};

console.log(findAnagramsIter('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagramsIter('acdcaeccde', 'c')); // [1,3,6,7]
console.log(findAnagramsIter('abab', 'ab')); // [0, 1, 2]
console.log(findAnagramsIter('baa', 'aa')); // [1]
console.log(findAnagramsIter('ababababab', 'aab')); // [0, 2, 4, 6];
