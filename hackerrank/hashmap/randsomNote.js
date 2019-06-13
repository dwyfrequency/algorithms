// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  if (magazine.length < note.length) {
    console.log('No');
    return 'No';
  }
  const dict = {};
  magazine.forEach(word => {
    dict[word] = word;
  });
  for (const word in note) {
    if (dict[word] === undefined) {
      console.log('No');
      return 'No';
    }
  }
  return 'Yes';
}

console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
);
