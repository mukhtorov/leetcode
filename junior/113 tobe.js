// No:2704 - https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 45ms 89.58%
// Memory - 41.42MB 88.52%

var solution1 = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};

const counter = solution1(3);
