// No:1512 - https://leetcode.com/problems/number-of-good-pairs/description/

// Solution - 1
// Runtime - 49ms 72.27%
// Memory - 45.06MB 42%
// PS: dehqoncha yo'li
var solution1 = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) === -1) continue;
    for (let j = i + 1; j < nums.length; j++) {
      nums[i] === nums[j] && count++;
    }
  }
  return count;
};

// Solution - 2
// Runtime - 42ms 95.79%
// Memory - 41.53MB 87.63%
// PS: PRO LEETCODER
var solution2 = function (nums) {
  let count = 0;
  let pairs = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (pairs.has(nums[i])) {
      let temp = pairs.get(nums[i]);
      count += temp;
      pairs.set(nums[i], temp + 1);
    } else pairs.set(nums[i], 1);
  }
  return count;
};

console.log(solution2([1, 2, 3, 1, 1, 3])); //[0,1,2,4,5,3]
console.log(solution2([1, 1, 1, 1]));
// console.log(solution1())
