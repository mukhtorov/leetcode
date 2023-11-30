// No:2176 - https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/

// Solution - 1
// Runtime - 52ms 78.06%
// Memory - 42.28MB 75.58%

var solution1 = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
};

// console.log(solution1([1, 2, 3, 4], 1)); // 0
console.log(solution1([3, 1, 2, 2, 2, 1, 3], 2)); // 4
