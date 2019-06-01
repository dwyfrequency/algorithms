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

// Time O(N) | Space O(1)
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

const addNumber = (num, largestNumArr) => {
  largestNumArr[0] = num;
  for (let index = 1; index < largestNumArr.length; index++) {
    if (largestNumArr[index] < num) {
      largestNumArr[index - 1] = largestNumArr[index];
      largestNumArr[index] = num;
    }
  }
};

const addNumberReverse = (num, largestNumArr) => {
  largestNumArr.push(num);
  for (let index = largestNumArr.length - 1; index > 0; index--) {
    if (num < largestNumArr[index - 1]) {
      largestNumArr[index] = largestNumArr[index - 1];
      largestNumArr[index - 1] = num;
    } else {
      largestNumArr.shift();
      return;
    }
  }
  largestNumArr.shift();
};

const threeLargestNumbersNotAsOptomized = arr => {
  const largestNumArr = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ];
  for (const num of arr) {
    if (num > largestNumArr[0]) {
      addNumber(num, largestNumArr);
    }
  }
  return largestNumArr;
};

module.exports = {
  threeLargestNumbersFaster,
  threeLargestNumbersEasyButSlower,
};
