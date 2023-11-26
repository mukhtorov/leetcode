// No:2942 - https://leetcode.com/problems/find-words-containing-character/

// Solution - 1
// Runtime - 62ms 100.00%
// Memory - 45.46MB 100.00%

var solution1 = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) res.push(i);
  }
  return res;
};

console.log(solution1(["leet", "code"], "e")); // 9
console.log(solution1([1, 2, 3, 4])); // 0
