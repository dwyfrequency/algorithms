// https://gist.github.com/sungsauce/1ea1b74af70b21d156ac51f64b626819
// finds all possible permutations *while* maintaining the order of the characters
function stringPermutations(str) {
  if (str.length === 1) return [str]; // base case
  const all = [];
  // go through each character in the string
  let i = 0;
  while (i < str.length) {
    // get each individual character
    const letter = str[i];
    // get all the other characters surrounding it
    const otherChars = str.slice(0, i) + str.slice(i + 1);
    // compute all permutations of the *other* characters
    stringPermutations(otherChars).forEach(submpermut => {
      // add the current letter to the front of each of these "sub-permutations"
      // include *that* into the full result set
      all.push(letter + submpermut);
    });
    // increment until we reach a new letter (to avoid duplicates in the result set)
    while (str[i] === letter) i++;
  }
  return all;
}
function sortedStringPermutations(str) {
  // first sort the characters in the string
  const sortedStr = str
    .split('')
    .sort()
    .join('');
  // then find the ordered permutations of that sorted string
  return stringPermutations(sortedStr);
}

/**
 *
 * We take the string and have a pointer to the start of the str.
 * We then create a string of all remaining characters in the str
 * next, we call our function recursively with the remaining
 * once, we hit our base case. We'll have an array of one character which
 * we'll loop over appending our startLetter to
 * After, we've looped over all letters returned from recurse. We increment
 * the index and in turn the startLetter. Now instead of having 'at', we'll have
 * 'ta'
 * When incrementing i for startLetter, we check if after we've incremented i
 * is our start letter different. If not, keep adding.
 */

const getPermuRecurse = str => {
  if (str.length === 1) {
    return [str];
  }
  const results = [];
  let i = 0;
  while (i < str.length) {
    const startLetter = str[i];
    // slice up to letter and after
    const remainingLetters = str.slice(0, i) + str.slice(1 + i);
    getPermuRecurse(remainingLetters).forEach(subPerm => {
      results.push(startLetter + subPerm);
    });
    while (str[i] === startLetter) i++;
    // we cant just do i++ b/c if a string has duplicate letters we'll get
    // too many results see example with btt
  }
  return results.sort();
};

console.log(getPermuRecurse('cat')); // ["act", "atc", "cat", "cta", "tac", "tca"]
console.log(getPermuRecurse('btt')); // ["btt", "tbt", "ttb"]
