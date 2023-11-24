// No:2574 - https://leetcode.com/problems/left-and-right-sum-differences/description/

// Solution - 1
// Runtime - 54ms 97%
// Memory - 48.51MB 99%

var solution1 = function (nums) {
  if (nums.length === 1) return [0];

  let res = new Array();
  let sum = nums.reduce((sum, val) => sum + val);

  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    res.push(Math.abs(right - (sum -= nums[i])));
    right += nums[i];
  }

  return res;
};

console.log(solution1([10, 4, 8, 3])); // 15
