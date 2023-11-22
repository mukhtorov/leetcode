// No:1470 - https://leetcode.com/problems/shuffle-the-array/

// Solution - 1
// Runtime - 50ms 94.44%
// Memory - 41.69MB 97.77%

var solution1 = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
};

console.log(solution1([2, 5, 1, 3, 4, 7], 3));
