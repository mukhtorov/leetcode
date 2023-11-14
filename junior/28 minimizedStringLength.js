// No:2744 - https://leetcode.com/problems/find-maximum-number-of-string-pairs/

// Solution - 1
// Runtime - 90ms / 100%
// Memory - 50.19MB / 76.22%
var solution1 = function (s) {
  return new Set([...s]).size;
};

console.log(solution1("aaabc")); //ponter
