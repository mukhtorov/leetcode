// No:2629 - https://leetcode.com/problems/function-composition/

// Solution - 1
// Runtime - 49ms 98.68%
// Memory - 42.73MB 94.73%
var solution1 = function (functions) {
  return function (x) {
    functions.reverse().forEach((fun) => {
      x = fun(x);
    });
    return x;
  };
};

// Solution - 1
// Runtime - 62ms 61%
// Memory - 43.38MB 46.46%
// PS: looks fine but I've tested several times, it is slow
var solution2 = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

console.log(solution1([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4)); // 65
