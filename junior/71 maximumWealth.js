// No:1672 - https://leetcode.com/problems/richest-customer-wealth/

// Solution - 1
// Runtime - 47ms 83.67%
// Memory - 42.07MB 56.95%
// two solution almost the same

var solution1 = function (accounts) {
  let wealth = 0;
  accounts.forEach((element) => {
    wealth = Math.max(
      wealth,
      element.reduce((val, res) => res + val)
    );
  });
  return wealth;
};
var solution2 = function (accounts) {
  let wealth = [];
  accounts.forEach((element) => {
    wealth.push(element.reduce((val, res) => res + val));
  });
  return Math.max(wealth);
};

console.log(
  solution1([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 19
