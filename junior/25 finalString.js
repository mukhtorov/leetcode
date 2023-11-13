// No:2810 - https://leetcode.com/problems/faulty-keyboard/

// Solution - 1
// Runtime - 95ms / 82.75%
// Memory - 47.35MB / 66.37%
var solution1 = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "i") res[i] = s[i];
    else {
      if (s[i + 1] !== "i") res.reverse();
      else i++;
    }
  }
  return res.join("");
};

console.log(solution1("poiinter")); //ponter
