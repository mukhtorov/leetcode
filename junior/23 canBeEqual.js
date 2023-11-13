// No:2839 - https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/description/

// Solution - 1
// Runtime - 60ms / 74.25%
// Memory - 44.68MB / 22.95%
var solution1 = function (s1, s2) {
  if (s1 === s2) return true;
  let [fi, sc, tr, fo] = [...s1];
  if (tr + sc + fi + fo === s2) {
    return true;
  }
  if (fi + fo + tr + sc === s2) {
    return true;
  }
  if (tr + fo + fi + sc === s2) {
    return true;
  }
  return false;
};

// console.log(solution1("abcd", "cdab"));
console.log(["ab"] == "ac");
