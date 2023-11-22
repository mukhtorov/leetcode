// No:2011 - https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

// Solution - 1
// Runtime - 46ms 93.44%
// Memory - 41.69MB 97.77%

var solution1 = function (operations) {
  let res = 0;
  for (let operation of operations) {
    if (operation === "++X" || operation === "X++") res++;
    else res--;
  }
  return res;
};
