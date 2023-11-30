// No:2626 - https://leetcode.com/problems/array-reduce-transformation/description/

// Solution - 1
// Runtime - 42ms 97.06%
// Memory - 41.28MB 87.58%

var solution1 = function (nums, fn, init) {
  if (!nums.length) return init;
  for (var i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

console.log(
  solution1(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
); // 10
// console.log(solution1([1, 3], 3)); // 0
