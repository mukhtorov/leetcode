// No:2586 - https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

// Solution - 1
// Runtime - 65ms 72.33%
// Memory - 45.6MB 25.43%

var solution1 = function (words, left, right) {
  let res = 0;
  let regexp = /[aeiou]/;
  for (let i = left; i <= right; i++) {
    let word = words[i];
    if (regexp.test(word[0]) && regexp.test(word[word.length - 1])) res++;
  }
  return res;
};
var solution2 = function (words, left, right) {
  let counter = 0;
  for (let i = left; i <= right; ++i) {
    const firstLetter = words[i][0];
    const lastLetter = words[i].at(-1);
    if (isVowel(firstLetter) && isVowel(lastLetter)) {
      ++counter;
    }
  }
  return counter;
};

const isVowel = (letter) => {
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
};

console.log(solution2(["hey", "aeo", "mu", "ooo", "artro"]));
// console.log(solution1(["are", "amy", "u"]));
