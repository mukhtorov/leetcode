// No:2194 - https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

// Solution - 1
// Runtime - 49ms 97.98%
// Memory - 43.6MB 99.04%

var solution1 = function (s) {
  let res = [];
  let max = s[4];
  let min = s[1];
  let start = s[0].charCodeAt();
  let end = s[3].charCodeAt();
  for (let i = start; i <= end; i++) {
    for (let j = min; j <= max; j++) {
      res.push(String.fromCharCode(i) + j);
    }
  }
  return res;
};

console.log(solution1("K1:L2")); // ["K1","K2","L1","L2"]
console.log(solution1("A1:F1")); // ["A1","B1","C1","D1","E1","F1"]
