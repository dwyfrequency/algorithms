// Initial attempt
function longestSubstringWithoutDuplication(string) {
  // Write your code here.
  // create set and two pointers interate until you find dup. delete
  // dup from set and move left pnt
  if (string.length < 2 || !string) return string;
  let leftPnt = 0,
    rightPnt = 1,
    maxarr = [string[leftPnt]];
  const set = new Set(string[leftPnt]);
  while (rightPnt < string.length) {
    if (set.has(string[rightPnt])) {
      maxarr.shift();
      maxarr.length === 0 && maxarr.push(string[leftPnt]);
      leftPnt++;
      rightPnt++;
    } else {
      set.add(string[rightPnt]);
      maxarr.push(string[rightPnt]);
      rightPnt++;
      if (maxarr.length < rightPnt - leftPnt) {
        maxarr = string.slice(leftPnt, rightPnt + 1).split('');
      }
    }
  }
  return;
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
