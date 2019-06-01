const swapIndexValue = (idx1, idx2, arr) => {
  const tempVal = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tempVal;
  return;
};

const addValue = (value, array) => {
  for (let index = array.length - 1; index > 0; index--) {
    if (value > array[index]) {
      if (index === 2) {
        array.shift();
        array.push(value);
        swapIndexValue(0, 1, array);
      } else if (index === 1) {
        array.shift();
        array.unshift(value);
        swapIndexValue();
      } else {
        array[0] = value;
      }
      break;
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
