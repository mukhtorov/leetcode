// No:2413 - https://leetcode.com/problems/smallest-even-multiple/description/

// Solution - 1
// Runtime - 45ms 87.88%
// Memory - 41.77MB 59.95%
// two solution almost the same

var solution1 = function (n) {
  if (n % 2) {
    return n * 2;
  } else {
    return n;
  }
};
var solution2 = function (n) {
  return n % 2 == 0 ? n : n * 2;
};

console.log(5); // 19
