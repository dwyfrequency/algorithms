/*
NOT COMPLETE
*/
function levenshteinDistance(str1, str2) {
  // Write your code here.
  const counter = {};
  const lenDelta = Math.abs(str1.length - str2.length);
  let totalChanges = lenDelta;
  // let totalChanges = 0;
  for (const char of str2) {
    if (!counter[char]) counter[char] = 1;
    else counter[char] += 1;
  }
  for (const char of str1) {
    if (!counter[char]) totalChanges++;
    else counter[char] = counter[char] === 1 ? null : counter[char] - 1;
  }
  return totalChanges;
}

console.log(levenshteinDistance('biting', 'mitten'));
