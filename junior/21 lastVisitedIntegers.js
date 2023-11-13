// No:2899 - https://leetcode.com/problems/last-visited-integers/description/

// Solution - 1
// Runtime - 60ms / 71.74%
// Memory - 43.87MB / 85.15%
var solution1 = function (words) {
  let res = [];
  let temp = [];
  let k = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "prev") {
      res.push(words[i]);
      k = 0;
    } else {
      k++;
      temp.push(res[res.length - k] ?? -1);
    }
  }
  return temp;
};

console.log(solution1(["1", "2", "prev", "prev", "prev"]));
