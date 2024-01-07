// No:2619 - https://leetcode.com/problems/array-prototype-last/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 46ms 82.54%
// Memory - 41.12MB 85.58%

Array.prototype.last = function () {
  const res = this.pop();
  return res === undefined ? -1 : res;
};

console.log([1, 9, 6, 3].last()); // 3
