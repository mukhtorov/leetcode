// No:2644 - https://leetcode.com/problems/find-the-maximum-divisibility-score/description/

// Solution - 1
// Runtime - 300ms 14%
// Memory - 51MB 6.2%
var solution1 = function (nums, divisors) {
  divisors = Array.from(new Set(divisors));
  let res = Math.min(...divisors);
  let max = 0;
  divisors.forEach((div, i) => {
    let count = 0;
    nums.forEach((num, j) => {
      if (num % div === 0) {
        count++;
        if (max === count && res > div) {
          res = div;
        } else if (max < count) {
          res = div;
          max = count;
        }
      }
    });
  });
  return res;
};

// Solution - 1
// Runtime - 208ms 98.77%
// Memory - 47MB 54%
var solution2 = function (nums, divisors) {
  nums.sort((a, b) => b - a);
  divisors.sort((a, b) => a - b);

  let max = 0;
  let div = divisors[0];

  for (const divisor of divisors) {
    let score = 0;

    for (const num of nums) {
      if (divisor > num) break;
      if (num % divisor === 0) score++;
    }

    if (score > max) {
      max = score;
      div = divisor;
    }
  }

  return div;
};

console.log(solution2([4, 7, 9, 3, 9], [5, 2, 3])); // 3
// console.log("=====");
// console.log(
//   solution2(
//     [31, 91, 47, 6, 37, 62, 72, 42, 85],
//     [95, 10, 8, 43, 21, 63, 26, 45, 23, 69, 16, 99, 92, 5, 97, 69, 33, 44, 8]
//   )
// ); // 5
