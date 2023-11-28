// No:1464 - https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

// Solution - 1
// Runtime - 61ms 65%
// Memory - 44.28MB 83%

var solution1 = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
var solution2 = function (nums) {
  let i = Math.max(...nums) - 1;
  nums.splice(nums.indexOf(i + 1), 1);
  let j = Math.max(...nums) - 1;
  return i * j;
};

console.log(solution1([1, 5, 4, 5])); //16
console.log(solution1([3, 4, 5, 2])); //16
