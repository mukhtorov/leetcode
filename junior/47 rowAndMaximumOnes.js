// No:2643 - https://leetcode.com/problems/row-with-maximum-ones/

// Solution - 1
// Runtime - 73ms 94.89%
// Memory - 49.88MB 77.2%
var solution1 = function (mat) {
  let temp = mat[0].reduce((sum, val) => sum + val, 0);
  let res = [0, temp];
  mat.forEach((element, i) => {
    let current = element.reduce((sum, val) => sum + val, 0);
    if (current > temp) {
      res = [i, current];
      temp = current;
    }
  });
  return res;
};

console.log(
  solution1([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
); // [1,2]
