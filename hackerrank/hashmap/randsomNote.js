// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// Time(m + n)? | Space O(N)
function checkMagazine(magazine, note) {
  if (magazine.length < note.length) {
    console.log('No');
    return 'No';
  }
  const dict = magazine.reduce((accum, word) => {
    if (accum[word]) {
      accum[word] += 1;
    } else {
      accum[word] = 1;
    }
    return accum;
  }, {});
  for (const word of note) {
    if (!dict[word]) {
      console.log('No');
      return 'No';
    } else {
      dict[word] -= 1;
    }
  }
  console.log('Yes');
  return 'Yes';
}

function checkMagazineAnother(magazine, note) {
  let { length: totalWords } = note;
  const wordFrequencyCnt = note.reduce((accum, word) => {
    if (accum[word]) accum[word] += 1;
    else accum[word] = 1;
    return accum;
  }, {});
  for (const ch of magazine) {
    if (wordFrequencyCnt[ch]) {
      wordFrequencyCnt[ch] -= 1;
      totalWords--;
    }
  }
  totalWords ? console.log('No') : console.log('Yes');
}

console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
);
