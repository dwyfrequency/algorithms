// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  if (s1.length > s2.length) {
    const set = new Set(s1.split(''));
    for (const ch of s2) {
      if (set.has(ch)) {
        return 'YES';
      }
    }
  } else {
    const set = new Set(s2.split(''));
    for (const ch of s1) {
      if (set.has(ch)) {
        return 'YES';
      }
    }
  }
  return 'NO';
}
