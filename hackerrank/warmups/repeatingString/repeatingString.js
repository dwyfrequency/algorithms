// URL: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
/*
 * Summary: We are counting the occurances of char 'a' in a repeating string of
 * length n.
 * 'aba', 10 will resolve to abaabaaba
 */

// Time O(S), | O(S) where is the length of the string
function repeatedString(s, n) {
  // take the floor so we know how many time the base string repeats
  const fullRepeats = Math.floor(n / s.length);
  // take the remainder in case repeat doesnt divide into clean int.
  const remainder = n % s.length;
  // create an array of counts, the count at 1 + stringIndex will be the total
  // of all preceding
  const aCntArr = Array.from({ length: s.length + 1 });
  // init 0 index to 0
  aCntArr[0] = 0;
  for (let i = 0; i < s.length; i++) {
    aCntArr[i + 1] = aCntArr[i];
    if (s[i] === 'a') {
      aCntArr[i + 1] += 1;
    }
  }
  return fullRepeats * aCntArr[aCntArr.length - 1] + aCntArr[remainder];
}
// str      [ 0: a,  1: b, 2: a  ]
//aCntArr   [ 0: 0 , 1: 1, 2: 1, 3: 2]
console.log(repeatedString('aba', 10)); // 7

console.log(repeatedString('b', 10)); // 0
console.log(repeatedString('a', 10)); // 10
console.log(repeatedString('a', 1)); // 1
