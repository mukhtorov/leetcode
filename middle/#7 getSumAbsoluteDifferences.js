// No:1685 - https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/description/

// Solution - 1
// Runtime -
// Memory -
// Time limit error

var solution1 = function (nums) {
  let map = new Map();
  for (let i in nums) {
    if (map.has(nums[i])) {
      map.set(i, nums[i]);
      continue;
    }
    let sum = 0;
    for (let num2 of nums) {
      sum += Math.abs(nums[i] - num2);
    }
    map.set(nums[i], sum);
  }
  return map.values();
};

// Solution - 2
// Runtime - 169ms 78.57%
// Memory - 68.60MB 78.57%
var solution2 = function (nums) {
  let totalSum = nums.reduce((sum, n) => sum + n, 0);
  let left = 0,
    result = [],
    right = totalSum;

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    result.push(nums[i] * i - left + right - nums[i] * (nums.length - i - 1));
    left += nums[i];
  }

  return result;
};

console.log(solution1([2, 3, 5])); // [4,3,5]
// console.log(solution1([1, 4, 6, 8, 10])); // [24,15,13,15,21]
