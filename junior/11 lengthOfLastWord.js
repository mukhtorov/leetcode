// link - https://leetcode.com/problems/length-of-last-word/description/

// Solution - 1
// Runtime 49ms / 66.82%
// Memory 41.86MB / 58.04%

var solution1 = function (s) {
  let ar = s.trim().split(" ");
  return ar[ar.length - 1].length;
};

// Solution - 2
// Runtime 49ms / 66.82%
// Memory 41.86MB / 58.04%
var solution2 = function (s) {
  let ar = s.trim();
  for (let i = 0; i < ar.length; i++) {
    if (ar[ar.length - i] === " ") return i - 1;
  }
};
// Solution - 3
// Runtime 43ms / 91.26%
// Memory 41.89MB / 58.04%
var solution3 = function (s) {
  let ar = s.trim();
  let regexp = /\b[a-zA-Z]+$/;
  return ar.match(regexp)[0].length;
};

console.log(solution3("   fly me   to   the moon  "));
