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

// Time O(n) | Space O(1)
var maxProfitFast = function(prices) {
  /* iterate through entire array
     calculate the min value at each location
     subtract min from current value at each location
     compare that val to current max
     return max once done */
  let max = 0;
  let min = Infinity; // highest possible val
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]); // create a min value
    // subtract min value from prices[item] and compare prev max
    max = Math.max(prices[i] - min, max);
  }
  return max;
};

console.log(maxProfitFast([1, 2]));
