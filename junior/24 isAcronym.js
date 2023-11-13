// No:2828 - https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

// Solution - 1
// Runtime - 63ms / 84.43%
// Memory - 44.60MB / 73.85%
var solution1 = function (words, s) {
  if (words.length !== s.length) return false;
  return words.every((val, i) => val[0] === s[i]);
};

console.log(solution1(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));
