// No:2727 - https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 39ms 98.54%
// Memory - 42.12MB 92.82%

var solution1 = function (obj) {
  if (Array.isArray(obj)) return !obj.length;
  else return !Object.values(obj).length;
};
