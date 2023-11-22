// No:1929 - https://leetcode.com/problems/concatenation-of-array/

// Solution - 1
// Runtime - 61ms 80%
// Memory - 45.29MB 55%

var solution1 = function (nums) {
  let length = nums.length;
  for (size in nums) {
    nums[length++] = nums[size];
  }
  return nums;
};

// Solution - 2
// Runtime - 54ms 96.51%
// Memory - 44.87MB 82%
var solution2 = function (nums) {
  return nums.concat(nums);
};

console.log(solution1([1, 2, 1]));
// console.log(solution1())
// console.log(solution1())
