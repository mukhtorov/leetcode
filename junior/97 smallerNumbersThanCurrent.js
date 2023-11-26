// No:1365 - https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

// Solution - 1
// Runtime - 61ms 81%
// Memory - 44.28MB 50%

var solution1 = function (nums) {
  let cache = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (cache.has(nums[i])) res.push(cache.get(nums[i]));
    else {
      let count = nums.filter((val) => nums[i] > val);
      res.push(count.length);
      cache.set(nums[i], count.length);
    }
  }
  return res;
};
var solution2 = function (nums) {
  return nums.map((v) =>
    nums.reduce((acc, curr) => acc + (curr < v ? 1 : 0), 0)
  );
};

console.log(solution1(["leet", "code"], "e")); // 9
console.log(solution1([1, 2, 3, 4])); // 0
