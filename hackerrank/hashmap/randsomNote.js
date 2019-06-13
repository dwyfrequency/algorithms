// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  if (magazine.length < note.length) {
    return 'No';
  }
  const dict = {};
  magazine.forEach(word => (dict[word] = word));
  for (const word in note) {
    if (!dict[word]) {
      return 'No';
    }
  }
  return 'Yes';
}
