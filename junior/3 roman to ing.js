// link - https://leetcode.com/problems/roman-to-integer

// Solution - 1 /
// Runtime 230ms / 5.09%
// Memory 52.65MB / 5.99%
function solution1(s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  var res = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = s[i] + s[i + 1];
    console.log(temp);
    if (temp in obj) {
      res += obj[temp];
      i++;
    } else res += obj[s[i]];
  }
  return res;
}

// Solution - 3 /
// Runtime 121ms / 19.57%
// Memory 48.47MB / 23.01%
function solution2(s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] + s[i + 1] in obj) {
      res += obj[s[i] + s[i + 1]];
      i++;
    } else res += obj[s[i]];
  }
  return res;
}

// Solution - 3 /
// Runtime 97ms / 88.79%
// Memory 49.03MB / 16.01%
function solution3(s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] + s[i + 1] === "CD") {
      res += 400;
      i++;
    } else if (s[i] + s[i + 1] === "CM") {
      res += 900;
      i++;
    } else if (s[i] + s[i + 1] === "XC") {
      res += 90;
      i++;
    } else if (s[i] + s[i + 1] === "XL") {
      res += 40;
      i++;
    } else if (s[i] + s[i + 1] === "IX") {
      res += 9;
      i++;
    } else if (s[i] + s[i + 1] === "IV") {
      res += 4;
      i++;
    } else if (s[i] === "I") res += 1;
    else if (s[i] === "V") res += 5;
    else if (s[i] === "X") res += 10;
    else if (s[i] === "L") res += 50;
    else if (s[i] === "C") res += 100;
    else if (s[i] === "D") res += 500;
    else if (s[i] === "M") res += 1000;
    else res += 0;
  }

  return res;
}
console.log(solution3("MCMXCIV"));
