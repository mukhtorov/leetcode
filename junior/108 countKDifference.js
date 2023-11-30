// No:2006 - https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

// Solution - 1
// Runtime - 50ms 89.06%
// Memory - 41.28MB 96.58%

var solution1 = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) count++;
    }
  }
  return count;
};

console.log(solution1([1, 2, 2, 1], 1)); // 4
// console.log(solution1([1, 3], 3)); // 0
