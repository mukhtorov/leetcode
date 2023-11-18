// No:1002 - https://leetcode.com/problems/find-common-characters/description/

// Solution - 1
// Runtime - 78ms 34.47%
// Memory - 48.06MB 33.85%

var solution1 = function (words) {
  let res = [];
  let letter = words[0];
  for (let i = 0; i < letter.length; i++) {
    if (res.includes(letter[i])) {
      let regexp = new RegExp(`${letter[i]}`, "g");
      let resCount = res.match(regexp)?.length || 0;
      if (words.every((val) => val.match(regexp)?.length >= resCount + 1)) {
        res.push(letter[i]);
      }
    } else if (words.every((val) => val.includes(letter[i]))) {
      res.push(letter[i]);
    }
  }

  return res;
};
// P/S: looks simply cool but works slow

// Solution - 1
// Runtime - 67ms 56.21%
// Memory - 44MB 73.6%
var solution2 = function (words) {
  let res = [];

  for (char of words[0]) {
    if (words.every((w) => w.includes(char))) {
      res.push(char);
      // remove letter from word
      words = words.map((w) => w.replace(char, ""));
    }
  }
  return res;
};

// Solution - 1
// Runtime - 50ms 97.58%
// Memory - 44.63MB 73.6%
var solution3 = function (words) {
  const benchMarkWordChars = words.shift().split("");
  console.log(benchMarkWordChars);

  const result = [];
  for (let i = 0; i < benchMarkWordChars.length; i++) {
    if (words.every((word) => word.includes(benchMarkWordChars[i]))) {
      result.push(benchMarkWordChars[i]);
      words = words.map((word) => word.replace(benchMarkWordChars[i], ""));
    }
  }

  return result;
};

console.log(solution3(["bella", "label", "roller"])); // ell
// console.log(solution1(["cool", "lock", "cook"])); // co
