// No:821 - https://leetcode.com/problems/shortest-distance-to-a-character/description/

// Solution - 1
// Runtime - 58ms 81.58%
// Memory - 43.19MB 95.49%
var solution1 = function (s, c) {
  let res = [];
  let position = s.indexOf(c);
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(c, i)) position = s.indexOf(c, i);
    else
      Math.abs(i - position) >= Math.abs(i - s.indexOf(c, i + 1)) &&
        (position = s.indexOf(c, i + 1));
    res.push(Math.abs(i - position));
  }
  return res;
};

console.log(solution1("loveleetcode", "e"));
// [3,2,1,0,1,0,0,1,2,2,1,0]
