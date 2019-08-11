/*
1. have two pnts,go until second finds space
2. we know we have a whole word, we can record the start and end idxs
 => 5 words 0th will be 4th,
 => not space eff, i would slice out these words and store them in an array
 => [tom, hac, hadf].reverse().join(' ').split('')

*/

// ['t', 'o', ' ', 'm']

/*
Input:

["a"," "," ","b"]
Expected:

["b"," "," ","a"]
Actual:

[ 'a', ' ', ' ', 'b' ]

arr = ['abc', ' ', 'def'] -> ['def, ' '', 'abc']
arr.join().reverse() = ['fed', ' ', 'cba']

*/
// Time O(n) | Space O(m)
function reverseWords(arr) {
  // your code goes here
  if (!arr || arr.length <= 1) return arr;
  let leftIdx = 0;
  let rightIdx = 0;
  const strArr = [];
  while (rightIdx < arr.length) {
    if (rightIdx === arr.length - 1) {
      strArr.push(arr.slice(leftIdx, rightIdx + 1).join(''));
      rightIdx++;
    } else if (arr[rightIdx] === ' ') {
      strArr.push(arr.slice(leftIdx, rightIdx).join(''));
      leftIdx = rightIdx + 1;
      rightIdx = leftIdx;
    } else {
      rightIdx++;
    }
  }
  return strArr
    .reverse()
    .join(' ')
    .split('');
}

console.log(reverseWords(['a', ' ', ' ', 'b']));
//reverseWords(["a"," "," ","b"])
