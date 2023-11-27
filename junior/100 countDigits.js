// No:2520 - https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

// Solution - 1
// Runtime - 61ms 84%
// Memory - 44.28MB 52%

var solution1 = function (num) {
  let count = 0;

  for (let n of String(num)) {
    if (num % n === 0) count++;
  }

  return count;
};
