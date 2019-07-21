// https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  console.log(
    arr.slice(0, 4).reduce((accum, num) => accum + num),
    arr.slice(-4).reduce((accum, num) => accum + num)
  );
}
