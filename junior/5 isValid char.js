// link - https://leetcode.com/problems/valid-parentheses/

// Solution - 1
// Runtime 56ms / 53.08%
// Memory 42.48MB / 51.88%

var isValid = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") res.push(")");
    else if (s[i] === "[") res.push("]");
    else if (s[i] === "{") res.push("}");
    else if (res.pop() !== s[i]) return false;
  }
  return !res.length;
};

console.log(isValid("()[]"));
