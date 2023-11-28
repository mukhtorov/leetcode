// No:2697 - https://leetcode.com/problems/lexicographically-smallest-palindrome/description/

// Solution - 1
// Runtime - 61ms 52%
// Memory - 44.28MB 57%

var solution1 = function (s) {
  let str = s.split("");
  for (let i = s.length - 1, j = 0; i >= Math.ceil(s.length / 2); i--, j++) {
    if (str[i] < str[j]) {
      str[j] = str[i];
    } else {
      str[i] = str[j];
    }
  }
  return str.join("");
};

console.log(solution1("egcfe")); //58
