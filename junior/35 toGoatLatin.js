// No:824 - https://leetcode.com/problems/goat-latin/

// Solution - 1
// Runtime - 49ms 77.47%
// Memory - 41.82MB 79.67%
var solution1 = function (sentence) {
  let res = "";
  let regexp = /[aeiuo]/i;
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (regexp.test(sentence[i][0])) {
      res = res.concat(sentence[i], "ma", "a".repeat(i + 1), " ");
    } else {
      res = res.concat(
        sentence[i].slice(1),
        sentence[i][0],
        "ma",
        "a".repeat(i + 1),
        " "
      );
    }
  }

  return res.trimStart();
};
// PS: to join strings with `${...}` works slow than concatination
console.log(solution1("I speak Goat Latin"));
