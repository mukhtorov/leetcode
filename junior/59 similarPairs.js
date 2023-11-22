// No:2506 - https://leetcode.com/problems/count-pairs-of-similar-strings/description/

// Solution - 1
// Runtime - 91ms 58.46%
// Memory - 49.25MB 25%

var solution1 = function (words) {
  let count = 0;
  words = words.map((val) => Array.from(new Set(val)).sort().join(""));
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let res = [];
    for (let j = i; j < words.length; j++) {
      if (i === j) continue;
      if (words[i] === words[j]) count++;
      else res.push(words[j]);
    }
    res = [];
  }

  return count;
};

// Solution - 2
// Runtime - 56ms 99.49%
// Memory - 44.97MB 96.92%
var solution2 = function (words) {
  const fc = new Map();
  let ans = 0;
  for (const word of words) {
    let mask = 0;
    for (let i = 0; i < word.length; ++i) {
      mask |= 1 << (word.charCodeAt(i) - "a".charCodeAt(0));
      console.log(mask, "mask");
    }
    ans += fc.get(mask) || 0;
    fc.set(mask, fc.get(mask) + 1 || 1);
    console.log(fc, "fc");
  }
  return ans;
};

// console.log(solution2(["aba", "aabb", "abcd", "bac", "aabc"])); // 2
// console.log(solution2(["aabb", "ab", "ba"])); // 3
// console.log(solution2(["nba", "cba", "dba"])); // 0

// console.log(1 | 3);
