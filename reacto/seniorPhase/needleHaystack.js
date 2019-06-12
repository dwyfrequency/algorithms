// essentially we're creating an indexOf method
// solution and problem description https://gist.github.com/a-Daley/31fcb2f35902689a15b888e8cd504b14

/*
  len 4 - len 2 = 2
  ('jack', 'ck')
  1. 'j' break
  2. 'a' break
  3. 'c' continue
  4. 'ck' found
*/
const needleHaystack = (hayStackText, needleText) => {
  // need to do less than or equal, or + 1 to b/c of a potential off by one error
  // if we left it as '<' it would never reach the last index
  for (
    let hayStackIdx = 0;
    hayStackIdx <= hayStackText.length - needleText.length;
    hayStackIdx++
  ) {
    for (let needleIdx = 0; needleIdx < needleText.length; needleIdx++) {
      //
      if (hayStackText[hayStackIdx + needleIdx] !== needleText[needleIdx]) {
        break;
      }
      if (needleIdx + 1 === needleText.length) return hayStackIdx;
    }
  }
  return -1;
};

console.log(needleHaystack('abbbaa', 'aba')); // -1
console.log(needleHaystack('abbbaa', 'aa')); // 4
