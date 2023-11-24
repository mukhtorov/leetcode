// No:1389 - https://leetcode.com/problems/left-and-right-sum-differences/description/

// Solution - 1
// Runtime - 40ms 98%
// Memory - 48.51MB 72%

var solution1 = function (nums, index) {
  let res = [];
  nums.forEach((element, i) => {
    res.splice(index[i], 0, element);
  });

  return res;
};

console.log(solution1([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // 15
