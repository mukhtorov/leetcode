// link - https://leetcode.com/problems/plus-one/description/

// Solution - 1
// Runtime 46ms / 84.06%
// Memory 41.43MB / 90.01%

var solution1 = function (digits) {
  let largeInt = BigInt(digits.map(String).join("")) + 1n;
  return Array.from(String(largeInt), Number);
};

console.log(solution1([1, 1, 9]));
