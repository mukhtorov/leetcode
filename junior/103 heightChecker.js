// No:1051 - https://leetcode.com/problems/height-checker/

// Solution - 1
// Runtime - 61ms 65%
// Memory - 44.28MB 52%

var solution1 = function (s) {
  let diff = 0;
  const expextedOrder = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (expextedOrder[i] !== heights[i]) diff++;
  }
  return diff;
};

console.log(solution1("egcfe")); //58
