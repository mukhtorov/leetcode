// No:2725 - https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 45ms 77.58%
// Memory - 41.42MB 88.52%

var solution1 = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);

  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

const counter = solution1(3);
