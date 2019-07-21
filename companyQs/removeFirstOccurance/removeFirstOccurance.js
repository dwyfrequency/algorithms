const removeFirstOccurance = (arr, str) => {
  arr.splice(arr.indexOf(str), 1);
  return arr;
};

exports.removeFirstOccurance = removeFirstOccurance;
