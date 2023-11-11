// link - https://leetcode.com/problems/two-sum/description/

// Solution - 1 /
// Runtime 90ms / 23.7%
// Memory 42.07mb / 87.3%

function solution1() {
  let nums = [3, 2, 3];
  let target = 6;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
        break;
      }
    }
  }
  console.log(res);
  return res;
}

// Solution - 2 /
// Runtime 77ms / 47.98%
// Memory 41.57mb / 98.33%
function solution2() {
  let nums = [3, 2, 3];
  let target = 6;
  let res = [];

  outer: for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
        break outer;
      }
    }
  }
  console.log(res);
  return res;
}
