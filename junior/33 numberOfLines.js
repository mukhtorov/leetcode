// No:806 - https://leetcode.com/problems/number-of-lines-to-write-string/description/

// Solution - 1
// Runtime - 42ms 95.42%
// Memory - 41.87MB 88.24%
var solution1 = function (widths, s) {
  let line = 1;
  let pixel = 0;
  for (let i = 0; i < s.length; i++) {
    let index = widths[s[i].charCodeAt() - 97];
    if (pixel + index <= 100) {
      pixel += index;
    } else {
      line++;
      pixel = index;
    }
  }
  return [line, pixel];
};

console.log(
  solution1(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
);
