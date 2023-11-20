// No:2666 - https://leetcode.com/problems/allow-one-function-call/description/

// Solution - 1
// Runtime - 41ms 96.61%
// Memory - 42.12MB 20%

var solution1 = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    } else return undefined;
  };
};
