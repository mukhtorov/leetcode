// No:2859 - https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/

// Solution - 1
// Runtime - 51ms 97%
// Memory - 48.62MB 15.88%

var solution1 = function (nums, k) {
  let regexp = /1/g;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let checker = i.toString(2).match(regexp)?.length || 0;
    console.log(i.toString(2));
    if (checker === k) {
      sum += nums[i];
    }
  }

  return sum;
};

// console.log(solution1([5, 10, 1, 5, 2], 1)); // 13
console.log(solution1([4, 3, 2, 1], 2)); // 1
