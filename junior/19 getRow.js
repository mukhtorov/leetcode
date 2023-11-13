// No:118 - https://leetcode.com/problems/pascals-triangle-ii

// Solution - 1
// Runtime - 49ms / 72%
// Memory - 42.28MB / 23.68%
var solution1 = function (nums) {
  let res = [[1]];
  for (let i = 0; i < nums; i++) {
    let temp = [];
    for (let j = 0; j <= res[i].length; j++) {
      temp[j] = (res[i][j] ?? 0) + (res[i][j - 1] ?? 0);
    }
    res.push(temp);
  }
  return res[nums];
};

console.log(solution1(5));
