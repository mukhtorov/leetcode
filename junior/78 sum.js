// No:1480 - https://leetcode.com/problems/running-sum-of-1d-array/description/

// Solution - 1
// Runtime - 47ms 86.86%
// Memory - 41.86MB 88.88%

var solution1 = function (nums) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    res.push((sum += nums[i]));
  }

  return res;
};

// P/S: Memoryda tez
var solution1 = function (nums) {
  let sum = 0;
  return nums.map((val) => (sum += val));
};

console.log(solution1([1, 2, 3, 4])); // [1,3,6,10]
