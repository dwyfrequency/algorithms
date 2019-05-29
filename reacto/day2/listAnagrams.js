const listAnagrams = arr => {
  if (!arr) return arr;
  const counter = arr.reduce((accum, word) => {
    const hash = word
      .split('')
      .sort()
      .join('');
    if (accum[hash] === undefined) accum[hash] = [word];
    else accum[hash] = accum[hash].concat(word);
    return accum;
  }, {});

  return Object.values(counter).filter(wordArr => wordArr.length > 1);
};
// const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];
// console.log(listAnagrams(words));

const words1 = ['cat', 'god', 'ignore', 'a phrase', 'dog', 'e hpsara'];
console.log(listAnagrams(words1));
