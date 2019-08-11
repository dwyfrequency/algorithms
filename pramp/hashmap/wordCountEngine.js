/*
1. split the string by space
2. santize the input of all punct.
3. dict frequency counter that will store the {cnt, idx}
4. convert our dictionary to an nested array and sort based on cnt
*/

// Time O(n log(n)) | Space O()
/*
1. split the string by space
2. santize the input of all punct.
3. dict frequency counter that will store the {cnt, idx}
4. convert our dictionary to an nested array and sort based on cnt
*/

// Time O(n log(n)) | Space O()
function wordCountEngine(document) {
  // your code goes here
  const frequencyCnt = {};
  document.split(' ').forEach((word, index) => {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s']/gi, '').toLowerCase();
    if (word) {
      if (frequencyCnt[word]) {
        frequencyCnt[word] = {
          count: frequencyCnt[word].count + 1,
          index: Math.min(index, frequencyCnt[word].index),
        };
      } else {
        frequencyCnt[word] = { count: 1, index };
      }
    }
  });

  // [[word, {index, count}]]
  let returnArr = Object.keys(frequencyCnt).map(key => [
    key,
    frequencyCnt[key],
  ]);
  returnArr.sort(([_a, a], [_b, b]) => {
    if (b.count === a.count) {
      return a.index - b.index;
    } else {
      return b.count - a.count;
    }
  });
  const blem = returnArr
    .map(innerArr => innerArr)
    .map(([key, { count }]) => [key, `${count}`]);
  return blem;
  // return returnArr.map(innerArr => innerArr.map((key, val) => [key, val.count]))
}

console.log(
  wordCountEngine(
    'Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. '
  )
);
