// No:2695 - https://leetcode.com/problems/array-wrapper/

// Solution - 1
// Runtime - 36ms 99.56%
// Memory - 43.71MB 59.34%

var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, val) => acc + val, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`;
};
console.log(solution1(10, 3)); // 19
