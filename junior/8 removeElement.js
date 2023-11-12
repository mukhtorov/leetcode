// link - https://leetcode.com/problems/remove-element/

// Solution - 1
// Runtime 49ms / 73.29%
// Memory 41.65MB / 81.29%
var solution2 = function (nums, val) {
  const set = nums.filter((vl) => vl !== val);
  let i = 0;
  set.forEach((num) => {
    nums[i] = num;
    i++;
  });
  return i;
};
console.log(solution2([3, 2, 2, 3], 3));
