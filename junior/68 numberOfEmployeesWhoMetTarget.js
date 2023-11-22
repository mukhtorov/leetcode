// No:2798 - https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

// Solution - 1
// Runtime - 48ms 93.44%
// Memory - 43.45MB 77.77%

var solution1 = function (hours, target) {
  return hours.filter((val) => val >= target).length;
};

console.log(solution1([0, 1, 2, 3, 4], 3));
