// No:2665 - https://leetcode.com/problems/counter-ii/description/

// Solution - 1
// Runtime - 51ms 90.11%
// Memory - 44.3MB 83%

var solution1 = function (init) {
  let currentValue = init;
  return {
    increment: () => ++currentValue,
    decrement: () => --currentValue,
    reset: () => {
      currentValue = init;
      return init;
    },
  };
};

console.log(solution1(["increment", "reset", "decrement"])); // 2
