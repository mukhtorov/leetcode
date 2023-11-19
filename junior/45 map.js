// No:2635 - https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

// Solution - 1
// Runtime - 42ms 94.54%
// Memory - 41.50MB 83.58%
var solution1 = function (arr, fn) {
  let filteredArray = [];
  arr.forEach((element, i) => {
    filteredArray[i] = fn(arr[i], i);
  });
  return filteredArray;
};

fn = function plusone(n) {
  return n + 1;
};

console.log(solution1([1, 2, 3], fn));
