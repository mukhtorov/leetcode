// No:118 - https://leetcode.com/problems/pascals-triangle/

// Solution - 1
// Runtime - 48ms / 81.47%
// Memory - 41.66MB / 94.00%
var solution1 = function (nums) {
  let res = [[1]];

  for (let i = 0; i < nums - 1; i++) {
    let temp = [];
    for (let j = 0; j <= res[i].length; j++) {
      temp[j] = (res[i][j] ?? 0) + (res[i][j - 1] ?? 0);
    }
    res.push(temp);
  }
  return res;
};

console.log(solution1(5));
