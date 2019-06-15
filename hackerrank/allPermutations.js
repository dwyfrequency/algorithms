// https://gist.github.com/sungsauce/1ea1b74af70b21d156ac51f64b626819
// finds all possible permutations *while* maintaining the order of the characters
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
// Time O(n!) | Space O(n!)
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

const getPermuRecurseV2 = str => {
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
  return results;
};

/*
Sorting the str first means we only have to sort n characters vs. n! slots in array
then call helper method above
*/
const getPermsuOptomized = str => {
  return str
    .split('')
    .sort()
    .join('');
};

// console.log(getPermuRecurse('cat')); // ["act", "atc", "cat", "cta", "tac", "tca"]
// console.log(getPermuRecurse('btt')); // ["btt", "tbt", "ttb"]

function stringPermutations(str) {
  let results = [];
  const letters = str.split('').sort(); // sort our initial array so we can n is smaller
  results.push([letters.shift()]);
  while (letters.length) {
    const currentLetter = letters.shift();
    const tempResults = [];
    // eslint-disable-next-line no-loop-func
    results.forEach(currResult => {
      for (let i = 0; i <= currResult.length; i++) {
        const tmp = currResult.slice(); // make copy
        // add the currentLetter at the i index of currResult
        tmp.splice(i, 0, currentLetter);
        // add the resulting tmp to our tempResults
        tempResults.push(tmp);
      }
    });
    // overwrite our results with tempResults created in forEach
    results = tempResults;
  }
  return results
    .map(letterArr => letterArr.join(''))
    .filter((word, index, thisArr) => thisArr.indexOf(word) === index); // remove duplicates if there is a word with double letters
}

function stringPermutationsSortLast(str) {
  let results = [];
  let letters = str.split('');
  results.push([letters.shift()]); //add first letter (as an array) to results
  while (letters.length) {
    let curLetter = letters.shift();
    let tmpResults = [];
    results.forEach(function(curResult) {
      // less than or equal to b/c we want to add the current letter at the
      // before and then after our current results
      for (let i = 0; i <= curResult.length; i++) {
        let tmp = curResult.slice(); //make copy so we can modify it
        //insert the letter at the current position
        tmp.splice(i, 0, curLetter); // adds curLetter at the index of i
        tmpResults.push(tmp);
      }
    });
    results = tmpResults; //overwrite the previous results
  }
  return results
    .map(function(letterArr) {
      return letterArr.join('');
    })
    .filter(function(el, index, self) {
      return self.indexOf(el) === index; //filter out non-unique words
    })
    .sort();
}

console.log(stringPermutations('cat')); // ["act", "atc", "cat", "cta", "tac", "tca"]
