// No:1528 - https://leetcode.com/problems/shuffle-string/description/

// Solution - 1
// Runtime - 49ms 92.98%
// Memory - 44.48MB 52.7%

var solution1 = function (s, indices) {
  let shaffeledString = "";
  for (let i = 0; i < s.length; i++) {
    let index = indices.indexOf(i);
    shaffeledString += s[index];
  }

  return shaffeledString;
};

console.log(solution1("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
