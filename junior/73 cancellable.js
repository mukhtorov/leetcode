// No:2715 - https://leetcode.com/problems/timeout-cancellation/description/

// Solution - 1
// Runtime - 45ms 99.30%
// Memory - 42MB 55%
// two solution almost the same

var solution1 = function (fn, args, t) {
  const timeout = setTimeout(() => fn(...args), t);

  const cancelFn = () => clearTimeout(timeout);

  return cancelFn;
};

console.log(5); // 19
