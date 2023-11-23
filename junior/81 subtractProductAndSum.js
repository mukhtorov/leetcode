// No:1281 - https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

// Solution - 1
// Runtime - 49ms 71.79%
// Memory - 42.14MB 39.99%

var solution1 = function (n) {
  let product = 1;
  let sum = 0;

  for (let value of n.toString()) {
    product *= value;
    sum += +value;
  }

  return product - sum;
};

console.log(solution1(234)); // 15
