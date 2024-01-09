// No:2623 - https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime -
// Memory -
// Time limit error

function memoize(fn) {
  let memo = {};

  return function (...args) {
    const argString = JSON.stringify(args);

    if (argString in memo) {
      return memo[argString];
    } else {
      let temp = fn(...args);
      memo[argString] = temp;
      return temp;
    }
  };
}
