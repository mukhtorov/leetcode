// No:1688 - https://leetcode.com/problems/count-of-matches-in-tournament/description/

// Solution - 1
// Runtime - 42ms 85.06%
// Memory - 41.28MB 85.58%

var solution1 = function (n) {
  let matchs = 0;
  while (n !== 1) {
    if (n % 2 === 0) n /= 2;
    else {
      n = (n - 1) / 2 + 1;
      matchs--;
    }
    matchs += n;
  }
  return matchs;
};

// Solution - 1
// Runtime - 42ms 98.06%
// Memory - 41.28MB 94.58%

var solution2 = function (n) {
  let matchs = 0;
  while (n > 1) {
    matchs += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }
  return matchs;
};

console.log(solution1(7)); // 6
