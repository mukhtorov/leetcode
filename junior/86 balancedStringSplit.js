// No:1221 - https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

// Solution - 1
// Runtime - 43ms 93.98%
// Memory - 41.69MB 92.43%

var solution1 = function (s) {
  let count = 0;
  let r = (l = 0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") r++;
    else l++;
    if (r === l && r && l) {
      count++;
      r = l = 0;
    }
  }

  return count;
};

// Looks nice, but works slower than solution1 / tested several times
var solution2 = function (s) {
  let balance = 0;
  let res = 0;

  for (const str of s) {
    if (str === "R") balance--;
    else balance++;
    if (!balance) res++;
  }

  return res;
};

console.log(solution1("RLRRLLRLRL")); // 4
