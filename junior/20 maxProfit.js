// No:121 - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Solution - 1
// Runtime - 72ms / 56.84%
// Memory - 51.25MB / 86.03%
var solution1 = function (prices) {
  let max = 0,
    min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else max = Math.max(prices[i] - min, max);
  }
  return max;
};

console.log(solution1([3, 2, 6, 5, 0, 3]));
