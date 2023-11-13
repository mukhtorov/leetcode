// ex:9 - https://leetcode.com/problems/palindrome-number/

// Solution - 1 /
// Runtime 161ms / 14.15%
// Memory 50.73MB / 70.33%
function solution1(x) {
  if (x >= 0) {
    if (x == `${x}`.split("").reverse().join("")) return true;
    else return false;
  } else return false;
}

// Solution - 2 /
// Runtime 138ms / 63.37%
// Memory 51.70 / 14.54%
function solution2(x) {
  if (x >= 0 && x <= 9) return true;
  else if (x >= 0) {
    if (x == `${x}`.split("").reverse().join("")) return true;
    else return false;
  } else return false;
}

// Solution - 3
// Runtime 130ms / 81.68%
// Memory 51.21 / 38.02%
function solution3(x) {
  return x == `${x}`.split("").reverse().join("");
}

// Solution - 4
// Runtime 118ms / 96.31%
// Memory 50.89MB /  64.51%
function solution3(x) {
  if (x < 0) return false;
  else return x == x.toString().split("").reverse().join("");
}
console.log(solution2(121));
