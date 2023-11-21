// No:433 - https://leetcode.com/problems/string-compression/description/

// Solution - 1
// Runtime - 56ms 78.20%
// Memory - 44.7 30.12%

var solution1 = function (chars) {
  if (chars.length === 1) return 1;
  let resCount = 0;
  let count = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) count++;
    else {
      chars[resCount++] = chars[i];
      if (count > 1) {
        for (ctx of count.toString()) {
          chars[resCount++] = ctx;
        }
      }
      count = 1;
    }
  }
  return resCount;
};

console.log(solution1(["a", "a", "b", "b", "c", "c", "c"])); // ["a","2","b","2","c","3"]
// console.log(solution1(["a"])); // ["a"]
