// No:2639 - https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/

// Solution - 1
// Runtime - 51ms 94.78%
// Memory - 45.22MB 22.61%
var solution1 = function (grid) {
  let result = [],
    temp = 0;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let item = grid[j][i].toString().length;
      if (temp < item) {
        temp = item;
      }
    }
    result.push(temp);
    temp = 0;
  }

  return result;
};

console.log(solution1([[1], [22], [333]]));
