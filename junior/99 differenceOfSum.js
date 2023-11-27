// No:2335 - https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

// Solution - 1
// Runtime - 61ms 68%
// Memory - 44.28MB 62%

var solution1 = function (nums) {
  let res = 0;
  for (let d of nums.join("")) {
    res += Number(d);
  }

  for (let i = 0; i < nums.length; i++) {
    res -= nums[i];
  }

  return Math.abs(res);
};
