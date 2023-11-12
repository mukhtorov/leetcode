// link - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Solution - 1
// Runtime 122ms / 12.12%
// Memory 44.56MB / 58.30%
var solution1 = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};
// Solution - 2
// Runtime 62ms / 63.86%
// Memory 43.98MB / 94.82%
var solution2 = function (nums) {
  const set = new Set(nums);
  let i = 0;
  set.forEach((num) => {
    nums[i] = num;
    i++;
  });

  return set;
};
// PS: for usage is required for this task.
console.log(solution2([1, 1, 2, 1]));
