// No:2894 - https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/

// Solution - 1
// Runtime - 50ms 88.44%
// Memory - 42.26MB 65.77%

var solution1 = function (n, m) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) res -= i;
    else res += i;
  }
  return res;
};

// Solution - 2
// Runtime - 44ms 98.5%
// Memory - 42.66MB 22.77%
var solution2 = function (n, m) {
  const countDivisible = (n / m) | 0;
  const sumDivisible = (m * countDivisible * (countDivisible + 1)) / 2;
  const sumTotal = (n * (n + 1)) / 2;
  return sumTotal - 2 * sumDivisible;
};

console.log(solution1(10, 3)); // 19
