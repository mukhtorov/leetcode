// No:942 - https://leetcode.com/problems/di-string-match/description/

// Solution - 1
// Runtime - 66ms 72.40%
// Memory - 44.51MB 66.67%

var solution1 = function (s) {
  let max = s.length;
  let min = 0;

  let res = [];

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "I") {
      res.push(min);
      min++;
    } else {
      res.push(max);
      max--;
    }
  }
  return res;
};

console.log(solution1("IDID"));
// [0,4,1,3,2]
