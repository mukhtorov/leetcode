// No:2899 - https://leetcode.com/problems/last-visited-integers/description/

// Solution - 1
// Runtime - 60ms / 74.25%
// Memory - 44.68MB / 22.95%
var solution1 = function (s) {
  let res = "";
  let zero = "1";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) res = "1" + res;
    else zero = "0" + zero;
  }
  return res.slice(1) + zero;
};

// Solution - 2
// Runtime - 71ms / 22.02%
// Memory - 44.18MB / 62.69%
var solution2 = function (s) {
  let res = s.split("").sort((a, b) => b - a);
  let temp = res.splice(0, 1);
  res.push(temp);
  return res.join("");
};

console.log(solution1("11101011"));
