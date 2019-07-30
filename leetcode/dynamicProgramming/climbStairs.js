/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsTooSlow = function(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs = function(n, memo = {}) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (memo[n - 1] === undefined) {
    memo[n - 1] = climbStairs(n - 1);
  } else if (memo[n - 1] === undefined) {
    memo[n - 2] = climbStairs(n - 2);
  }
  return memo[n - 1] + memo[n - 2];
};
