// No:2114 - https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

// Solution - 1
// Runtime - 43ms 97.3%
// Memory - 43.62MB 71.99%

var solution1 = function (sentences) {
  let regexp = /\b\w+\b/g;

  let words = sentences.map((val) => val.match(regexp)?.length);

  return Math.max(...words);
};

// Solution - 2
// Runtime - 50ms 81.52%
// Memory - 44.11MB 52.52%
var solution2 = function (sentences) {
  let words = sentences.map((val) => val.split(" ")?.length);

  return Math.max(...words);
};

// console.log(solution1([5, 10, 1, 5, 2], 1)); // 13
console.log(
  solution1([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
); // 1
