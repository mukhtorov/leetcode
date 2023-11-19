// No:2634 - https://leetcode.com/problems/filter-elements-from-array/description/

// Solution - 1
// Runtime - 45ms 87.92%
// Memory - 41.74MB 67.65%
var solution1 = function (arr, fn) {
  let filteredArray = [];
  arr.forEach((element, i) => {
    if (fn(element, i)) filteredArray.push(element);
  });
  return filteredArray;
};
