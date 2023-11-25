// No:1816 - https://leetcode.com/problems/truncate-sentence/

// Solution - 1
// Runtime - 46ms 84.98%
// Memory - 42.88MB 5.7%

var solution1 = function (s, k) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") k--;
    if (!k) return s.slice(0, i);
  }
  return s;
};

// Solution - 2
// Runtime - 44ms 90.98%
// Memory - 42.35MB 16.7%
var solution2 = function (s, k) {
  let S = s.split(" ");
  S.length = k;
  return S.join(" ");
};

// Solution - 3
// Runtime - 49ms 69.98%
// Memory - 42.1MB 41.7%
var solution2 = function (s, k) {
  let words = s.split(" ").slice(0, k).join(" ");
  return words;
};

console.log(solution1("Hello how are you Contestant"));
