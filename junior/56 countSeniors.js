// No:2678 - https://leetcode.com/problems/number-of-senior-citizens/description/

// Solution - 1
// Runtime - 43ms 97.33%
// Memory - 43.9MB 60.43%

var solution1 = function (details) {
  return details.filter((element) => element.slice(11, 13) > 60).length;
};

console.log(
  solution1(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
