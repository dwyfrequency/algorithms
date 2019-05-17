const getNthFib = n => {
  if (n < 2) {
    return 1;
  }
  return n - 2 + n - 1;
};

console.log(getNthFib(6));

module.exports = {
  getNthFib,
};
