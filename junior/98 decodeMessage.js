// No:2325 - https://leetcode.com/problems/decode-the-message/description/

// Solution - 1
// Runtime - 61ms 93%
// Memory - 44.28MB 39%

var solution1 = function (key, message) {
  let res = "";
  let tempLang = "";
  for (let k of key) {
    if (k !== " " && !tempLang.includes(k)) tempLang += k;
  }
  for (let msg of message) {
    if (msg === " ") res += " ";
    else res += String.fromCharCode(tempLang.indexOf(msg) + 97);
  }

  return res;
};
