// No:2652 - https://leetcode.com/problems/sum-multiples/description/

// Solution - 1
// Runtime - 46ms 99.07%
// Memory - 43.54MB 52.05%
var solution1 = function (n) {
  let res = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) res += i;
  }
  return res;
};

console.log(solution1(7)); // 21
console.log(solution1(10)); // 40
