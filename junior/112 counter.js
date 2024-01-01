// No:2620 - https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 50ms 62.58%
// Memory - 41.32MB 93.52%

var solution1 = function (n) {
  return () => n++;
};

const counter = solution1(3);
console.log(counter()); // 3
console.log(counter()); // 4
console.log(counter()); // 5
