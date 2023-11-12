// link - https://leetcode.com/problems/search-insert-position/

// Solution - 1
// Runtime 42ms / 95.26%
// Memory 41.98MB / 66.15%

var solution1 = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  else if (nums[nums.length - 1] <= target) return nums.length;
  else if (nums[0] >= target) return 0;
  else {
    for (i in nums) {
      if (nums[i] > target) return i;
    }
  }
};

console.log(solution1([1, 3, 5, 6], 7));
