// No:953 - https://leetcode.com/problems/verifying-an-alien-dictionary/description/

// Solution - 1
// Runtime - 36ms 99.66%
// Memory - 41.70MB 96.98%

var solution1 = function (words, order) {
  outer: for (let i = 0; i < words.length - 1; i++) {
    inner: for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === words[i + 1][j]) {
        if (
          words[i].length === words[i + 1].length &&
          words[i].includes(words[i + 1])
        )
          continue outer;
        if (
          words[i].length !== words[i + 1].length &&
          words[i].includes(words[i + 1])
        )
          return false;
        if (
          words[i].length !== words[i + 1].length &&
          words[i + 1].includes(words[i])
        )
          continue outer;
        continue inner;
      } else if (order.indexOf(words[i][j]) > order.indexOf(words[i + 1][j]))
        return false;
      else if (order.indexOf(words[i][j]) < order.indexOf(words[i + 1][j]))
        continue outer;
    }
  }
  return true;
};

console.log(solution1(["ubg", "kwh"], "qcipyamwvdjtesbghlorufnkzx")); // true
// console.log(solution1(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz")); // true
// console.log(solution1(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
// console.log(solution1(["app", "apple"], "abcdefghijklmnopqrstuvwxyz")); // true
// console.log(solution1(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")); // false
// console.log(solution1(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false
// console.log(words[j], words[j][i], words[j + 1], words[j + 1][i + 2]);
