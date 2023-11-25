// No:1662 - https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

// Solution - 1
// Runtime - 45ms 87.98%
// Memory - 41.46MB 94.04%

var solution1 = function (word1, word2) {
  word1 = word1.join("");
  word2 = word2.join("");
  return word1 === word2;
};

console.log(solution1(["ab", "c"], ["a", "bc"])); // true
console.log(solution1(["a", "cb"], ["ab", "c"])); // false
