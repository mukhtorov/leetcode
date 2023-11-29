// No:1844 - https://leetcode.com/problems/replace-all-digits-with-characters/description/

// Solution - 1
// Runtime - 61ms 65%
// Memory - 44.28MB 83%

var solution1 = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s[i].repeat(s[++i] || 0);
  }
  return res;
};

console.log(solution1("a1c1e1")); // abcdef
console.log(solution1("a1b2c3d4e")); // abbdcfdhe
