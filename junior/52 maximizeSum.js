// No:2656 - https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

// Solution - 1
// Runtime - 91ms 91.16%
// Memory - 47.44MB 50.25%
var solution1 = function (nums, k) {
  let max = Math.max(...nums);
  let res = 0;
  for (let i = max; i < max + k; i++) {
    res += i;
  }
  return res;
};

// Solution - 2
// Runtime - 89ms 93.69%
// Memory - 47.27MB 58.08%
var solution2 = function (nums, k) {
  let a = Math.max(...nums);
  let sum = 0;
  while (k--) {
    sum += a + k;
  }
  return sum;
};

// Solution - 3
// Runtime - 89ms 93.69%
// Memory - 47.27MB 58.08%
var solution3 = function (nums, k) {
  let max = Math.max(...nums);
  return (k * (max + max + k - 1)) / 2;
};
console.log(solution2([1, 2, 3, 4, 5], 3)); // 18
// console.log(solution2([5, 5, 5], 2)); // 11
