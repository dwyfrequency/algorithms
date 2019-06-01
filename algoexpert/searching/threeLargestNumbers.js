const addValue = (value, array) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (value > array[index]) {
      if (index === 2) {
        array[0] = array[1];
        array[1] = array[2];
        array[2] = value;
      } else if (index === 1) {
        array[0] = array[1];
        array[1] = value;
      } else {
        array[0] = value;
      }
      return;
    }
  }
};

const threeLargestNumbersFaster = arr => {
  const largestNumArr = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ];
  for (const num of arr) {
    if (num > largestNumArr[0]) {
      addValue(num, largestNumArr);
    }
  }
  return largestNumArr;
};

const threeLargestNumbersEasyButSlower = arr => {
  return arr.sort((a, b) => a - b).slice(-3);
};

module.exports = {
  threeLargestNumbersFaster,
  threeLargestNumbersEasyButSlower,
};
