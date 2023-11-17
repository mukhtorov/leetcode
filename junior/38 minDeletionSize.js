// No:944 - https://leetcode.com/problems/delete-columns-to-make-sorted/description/

// Solution - 1
// Runtime - 48ms 98.64%
// Memory - 45.58MB 91.16%

var solution1 = function (strs) {
  let count = 0;
  outer: for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        count++;
        continue outer;
      }
    }
  }
  return count;
};

// console.log(solution1(["rrjk", "furt", "guzm"]));
console.log(solution1(["zyx", "wvu", "tsr"]));
