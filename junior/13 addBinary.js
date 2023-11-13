// link - https://leetcode.com/problems/add-binary/

// Solution - 1
// Runtime
// Memory
var solution1 = function (a, b) {
  let res = parseInt(b, 2) + parseInt(a, 2);
  return res.toString(2);
};
// this solution works for small numbers
// but large numbers, it doesn't work

// Solution - 1
// Runtime 46ms / 84.06%
// Memory 41.43MB / 90.01%
var solution2 = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
// PS: ob - big binaryni automaticall numberga convert qilib beradi )
// new staff for me
console.log(solution2("11", "01"));
