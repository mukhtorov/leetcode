// No:2677 - https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 39ms 98.54%
// Memory - 42.12MB 92.58%

var solution1 = function (arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, size + i));
  }

  return res;
};

console.log(solution1([1, 9, 6, 3, 2], 3)); //[[1,9,6],[3,2]]
