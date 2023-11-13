// No:2788 - https://leetcode.com/problems/split-strings-by-separator/description/

// Solution - 1
// Runtime - 87ms / 54.26%
// Memory - 46.34MB / 99.51%
var solution1 = function (words, separator) {
  let str = words.join(separator);
  return str.split(separator);
};

console.log(solution1(["$easy$", "$problem$"], "$")); //ponter
