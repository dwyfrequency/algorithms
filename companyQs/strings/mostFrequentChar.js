// function solution(S) {
//   if (S.length <= 1) return S;
//   const occurrences = new Array(26);
//   let bestChar = 'a';
//   let bestRes = 0;
//   for (let i = 0; i < S.length; i++) {
//     const locationInOcc = S.charCodeAt(i) - 'a'.charCodeAt(0);
//     if (occurrences[locationInOcc] === undefined) {
//       occurrences[locationInOcc] = 1;
//     } else {
//       const localMax = occurrences[locationInOcc] + 1;
//       occurrences[locationInOcc] = localMax;
//       if (localMax > bestRes) {
//         bestChar = S[i];
//         bestRes = localMax;
//       } else if (localMax === bestRes && S[i] < bestChar) {
//         bestChar = S[i];
//       }
//     }
//   }
//   return bestChar;
// }

function solution(S) {
  var occurrences = new Array(26);
  for (var i = 0; i < occurrences.length; i++) {
    occurrences[i] = 0;
  }

  for (var id in S) {
    occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
  }

  var best_char = 'a';
  var best_res = 0;

  for (var i = 0; i < 26; i++) {
    if (occurrences[i] > best_res) {
      best_char = String.fromCharCode('a'.charCodeAt(0) + i);
      best_res = occurrences[i];
    }
  }

  return best_char;
}

console.log(solution('bbbaaba')); // b
console.log(solution('bbaaba')); // a
console.log(solution('bzzbazabazv')); // z
console.log(solution('c')); // c
