// No:1342 - https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

// Solution - 1
// Runtime - 49ms 72.98%
// Memory - 41.48MB 87.7%

var solution1 = function (num) {
  let numOfSteps = 0;
  while (num) {
    numOfSteps++;
    if ((num ^ 1) == num + 1) num /= 2;
    else num--;
  }
  return numOfSteps;
};

console.log(solution1(18));
