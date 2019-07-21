const removeFirstOccurance = (arr, str) => {
  // find the fist index of the str and set delete count to 1
  arr.splice(arr.indexOf(str), 1);
  // return mutated array
  return arr;
};

exports.removeFirstOccurance = removeFirstOccurance;
