// No:1313 - https://leetcode.com/problems/decompress-run-length-encoded-list/

// Solution - 1
// Runtime - 60ms 91.98%
// Memory - 41.69MB 99.7%

var solution1 = function (nums) {
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    res += `${nums[1 + i]} `.repeat(nums[i]);
    i++;
  }
  return res.trimEnd().split(" ");
};

console.log(solution1([1, 2, 3, 4])); // [2,4,4,4]
console.log(solution1([1, 1, 2, 3])); // [1,3,3]
