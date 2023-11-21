// No:334 - https://leetcode.com/problems/increasing-triplet-subsequence/description/

// Solution - 1
// Runtime -
// Memory -

var solution1 = function (nums) {
  let max, min;
  outer: for (let i = 0; i < nums.length; i++) {
    min = max = nums[i];
    inner: for (let j = i; j < nums.length; j++) {
      if (min < nums[j] && max > nums[j]) {
        max = nums[j];
      } else if (min < max && max < nums[j]) {
        return true;
      } else if (min < nums[j]) {
        max = nums[j];
      }
    }
  }
  return false;
  // it works but for large numbers it is time limit exceeded.
};

// Solution - 1
// Runtime - 67ms 82.13%
// Memory - 60MB 51.23%
var solution2 = function (nums) {
  let firstNum = Infinity;
  let secoundNum = Infinity;

  for (let currentNum of nums) {
    if (currentNum > secoundNum) return true;
    if (currentNum > firstNum) secoundNum = currentNum;
    else firstNum = currentNum;
  }
  return false;
};
// console.log(solution2([0, 4, 2, 1, 0, -1, -3])); // false
console.log(solution2([1, 5, 0, 4, 1, 3])); // true
// console.log(solution2([2, 1, 5, 0, 4, 6])); // true
// console.log(solution1([2, 4, -2, -3])); // false
// console.log(solution1([5, 4, 3, 2, 1])); // false
