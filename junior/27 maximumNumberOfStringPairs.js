// No:2744 - https://leetcode.com/problems/find-maximum-number-of-string-pairs/

// Solution - 1
// Runtime - 49ms / 98.41%
// Memory - 44.74MB / 51.09%
var solution1 = function (words) {
  return (
    words.length -
    new Set(words.map((a) => (a[0] > a[1] ? a[0] + a[1] : a[1] + a[0]))).size
  );
};

console.log(solution1(["cd", "ac", "dc", "ca", "zz"])); //ponter
