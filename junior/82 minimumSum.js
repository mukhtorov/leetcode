// No:2160 - https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/

// Solution - 1
// Runtime - 45ms 95.53%
// Memory - 41.49MB 70.61%

var solution1 = function (num) {
  num = num.toString().split("").sort().join("");
  return Number(num[0] + num[3]) + Number(num[1] + num[2]);
};

console.log(solution1(2932)); // 15
