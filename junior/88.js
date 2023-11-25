// No:2621 - https://leetcode.com/problems/sleep/description/

// Solution - 1
// Runtime - 44ms 92.98%
// Memory - 41.31MB 85.7%

var solution1 = function (nums) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("leetcoder");
    }, millis);
  });
};

console.log(solution1([1, 2, 3, 4])); // [2,4,4,4]
console.log(solution1([1, 1, 2, 3])); // [1,3,3]
