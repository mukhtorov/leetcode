// ex:28 - https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Solution - 1
// Runtime 48ms / 75.44%
// Memory 41.46MB / 90.86%

var solution1 = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Solution - 2
// Runtime 52ms / 52.20%
// Memory 41.52MB / 85.45%
var solution1 = function (haystack, needle) {
  let regexp = new RegExp(`${needle}`);
  return haystack.match(regexp);
};
console.log(solution2("sadbutsad", "2345sad"));
