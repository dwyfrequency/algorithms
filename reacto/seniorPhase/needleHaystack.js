// essentially we're creating an indexOf method
// solution and problem description https://gist.github.com/a-Daley/31fcb2f35902689a15b888e8cd504b14

const needleHaystack = (hayStackText, needleText) => {
  for (
    let hayStackIdx = 0;
    hayStackIdx < hayStackText.length - needleText.length;
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

console.log(needleHaystack('abbbaa'));
