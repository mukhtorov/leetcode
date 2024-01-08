// No:2724 - https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 46ms 82.54%
// Memory - 41.12MB 85.58%

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
