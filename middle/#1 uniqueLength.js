// No:1930 - https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/?envType=daily-question&envId=2023-11-14

// Solution - 1
// Runtime -
// Memory -
var solution1 = function (s) {
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      for (let l = j + 1; l < s.length; l++) {
        let forward = s[i] + s[j] + s[l];
        if (forward === forward.split("").reverse().join("")) set.add(forward);
      }
    }
  }
  return set.size;
};
// it works, but for large string time limit exceeded

// Solution - 2
// Runtime -
// Memory -
var solution2 = function (s) {
  let set = new Set();
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInx = i;
    let lastInx = s.indexOf(s[i], i + 1);
    if (lastInx !== -1) {
      k += lastInx - currentInx;
    }
  }
  console.log(set);
  return k;
};
// it also works, but for large string time limit exceeded. faster than solution1

// Solution - 3
// Runtime -
// Memory -
var solution3 = function (s) {
  let count = 0;
  for (let i = 0; i < 26; ++i) {
    let currentChar = String.fromCharCode(i + 97);
    let current = s.indexOf(currentChar);
    let last = s.lastIndexOf(currentChar);
    if (current !== -1 && last !== -1 && current < last) {
      console.log(new Set(s.substring(current + 1, last)));
      count += new Set(s.substring(current + 1, last)).size;
    }
  }
  return count;
};

console.log(solution3("bbcbaba")); // 4
