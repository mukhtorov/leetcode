// No:1005 - https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

// Solution - 1
// Runtime - 127ms 11.54%
// Memory - 48.13MB 10%
// P/S: Slow solution
var solution1 = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums = nums.sort((a, b) => a - b);
    if (nums[0] === 0) break;
    if (nums[0] > 0) {
      nums[0] = ((k - i + 1) % 2 ? 1 : -1) * nums[0];
      break;
    }
    nums[0] = nums[0] * -1;
  }
  console.log(nums);

  return nums.reduce((val, sum) => sum + val, 0);
};

// Solution - 1
// Runtime - 55ms 82.31%
// Memory - 42.78MB 70.77%
var solution2 = function (nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  let maxSum = 0;

  for (let i = nums.length - 1; i > 0; i--) {
    if (i > 0 && nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
    maxSum += nums[i];
  }

  if (k % 2 === 1) nums[0] *= -1;
  maxSum += nums[0];

  return nums.reduce((val, sum) => sum + val, 0);
};

console.log(solution2([-8, 3, -5, -3, -5, -2], 6)); // 22
console.log(solution2([-2, 9, 9, 8, 4], 5)); // 32
console.log(solution2([4, 2, 3], 1)); // 5
console.log(solution1([2, -3, -1, 5, -4], 2)); // 13
