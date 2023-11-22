// No:1920 - https://leetcode.com/problems/build-array-from-permutation/

// Solution - 1
// Runtime - 61ms 80%
// Memory - 45.29MB 55%

var solution1 = function (nums) {
  let res = [];
  for (let i in nums) {
    res[i] = nums[nums[i]];
  }
  return res;
};

// Solution - 2
// Runtime - 61ms 88%
// Memory - 45MB 89%
var solution2 = function (nums) {
  return nums.map((num) => nums[num]);
};

console.log(solution1([0, 2, 1, 5, 3, 4])); //[0,1,2,4,5,3]
// console.log(solution1())
// console.log(solution1())
