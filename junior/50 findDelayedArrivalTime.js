// No:2651 - https://leetcode.com/problems/calculate-delayed-arrival-time/description/

// Solution - 1
// Runtime - 50ms 62.21%
// Memory - 41.56MB 88.07%
var solution1 = function (arrivalTime, delayedTime) {
  if (arrivalTime + delayedTime >= 24) return arrivalTime + delayedTime - 24;
  else return arrivalTime + delayedTime;
};

// Solution - 2
// Runtime - 52ms 72.28%
// Memory - 42.56MB 58.43%
var solution2 = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};

console.log(solution1(15, 5));
console.log(solution1(11, 13));
