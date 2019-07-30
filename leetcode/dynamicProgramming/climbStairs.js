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

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (memo[n] === undefined) {
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }
  return memo[n];
};
