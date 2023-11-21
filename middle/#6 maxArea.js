// No:11 - https://leetcode.com/problems/container-with-most-water/

// Solution - 1
// Runtime - 56ms 92.92%
// Memory - 49.60MB 51.56%

var solution1 = function (height) {
  let front = 0;
  let back = height.length - 1;
  let maxWater = 0;

  while (front < back) {
    let width = back - front;
    let h = Math.min(height[front], height[back]);
    let water = width * h;
    maxWater = Math.max(maxWater, water);
    if (height[front] < height[back]) front++;
    else back--;
  }

  return maxWater;
};

// Solution - 2
// Runtime -
// Memory -
var solution2 = function (height) {
  let maxArea = 0;
  const l = height.length;
  for (let left = 0; left < l; left++) {
    for (let right = l - 1; right > left; right--) {
      const min = Math.min(height[left], height[right]);

      maxArea = Math.max((right - left) * min, maxArea);

      if (height[left] === height[right]) {
        break;
      }
    }
  }

  return maxArea;
};

console.log(solution1([1, 0, 0, 0, 0, 0, 0, 2, 2])); // 2
// console.log(solution1([1, 2, 1])); // 2
// console.log(solution1([1, 1])); // 1
// console.log(solution1([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
