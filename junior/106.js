// No:2778 - https://leetcode.com/problems/sum-of-squares-of-special-elements/description/

// Solution - 1
// Runtime - 57ms 90.06%
// Memory - 43.28MB 85.58%

var solution1 = function (nums) {
  sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) == 0) {
      sum += nums[i] ** 2;
    }
  }

  return sum;
};

// Solution - 1
// Runtime - 57ms 90.06%
// Memory - 43.28MB 85.58%

var solution2 = function (nums) {
  let length = nums.length;
  return nums.reduce((sum, val, i) => {
    if (length % (i + 1) === 0) return sum + nums[i] ** 2;
    else return sum;
  });
};

console.log(solution2([1, 2, 3, 4])); // 21
console.log(solution2([2, 7, 1, 19, 18, 3])); // 63
