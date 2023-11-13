// No:70 - https://leetcode.com/problems/sqrtx/

// Solution - 1 - fibanaci
// Runtime - 42ms / 93.27%
// Memory - 41.66MB / 62.42%
var solution1 = function (n) {
  let res = [1, 2];
  for (let i = 2; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res[n - 1];
};

// Solution - 2
// Runtime - 52ms / 45%
// Memory - 41.96MB / 27.42%
var solution2 = function (n) {
  let sum1 = (sum2 = 1);

  while (n > 0) {
    const tmp = sum2;
    sum2 += sum1;
    sum1 = tmp;
    n--;
  }
  return sum1;
};

console.log(solution2(5));
