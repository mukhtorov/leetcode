// No:2667 - https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 50ms 58.06%
// Memory - 40.72MB 99.52%

var solution1 = function (n) {
  return () => "Hello World";
};

console.log(solution1(7)); // 6
