const getNthFib = n => {
  if (n < 2) {
    return 1;
  }
  return n - 2 + n - 1;
};

// Time O(n) | Space O(1)
const getNthFibIter = n => {
  if (n <= 1) return 0;
  if (n === 2) return 1;
  const fib = [0, 1];
  for (let i = 3; i < n; i++) {
    const earliestVal = fib.shift();
    fib.push(earliestVal + fib[0]);
  }
  return fib[0] + fib[1];
};

console.log(getNthFib(6));

module.exports = {
  getNthFib,
};
