// No:2824 - https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

// Solution - 1
// Runtime - 58ms 63.86%
// Memory - 42.53MB 93.91%
// bulshit question ))

var solution1 = function (nums, target) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) counter++;
    }
  }

  return counter;
};

console.log(solution1([-6, 2, 5, -2, -7, -1, 3], -2)); //
// console.log(solution1([-1, 1, 2, 3, 1], 2)); //
