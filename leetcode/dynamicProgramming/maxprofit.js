/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n^2) | Space O(1)
var maxProfitSlow = function(prices) {
  let curMax = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let k = i + 1; k < prices.length; k++) {
      curMax = Math.max(prices[k] - prices[i], curMax);
    }
  }
  return curMax;
};
