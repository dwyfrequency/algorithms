/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const set = new Set();
  const returnArr = [];
  while (left <= right) {
    let match = true;
    const numArr = left.toString().split('');
    for (const ch of numArr) {
      const curNum = +ch;
      if (left % curNum === 0) {
        !set.has(curNum) && set.add(curNum);
        // powIncrement--;
      } else {
        match = false;
      }
    }
    match && returnArr.push(left);
    left++;
  }
  return returnArr;
};
