// No:88 - https://leetcode.com/problems/merge-sorted-array

// Solution - 1
// Runtime - 46ms / 86.62%
// Memory - 41.87MB / 68.72%
var solution1 = function (nums1, m, nums2, n) {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  return nums1.sort((a, b) => a - b);
};

console.log(solution1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
