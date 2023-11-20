// No:238 - https://leetcode.com/problems/product-of-array-except-self/description/

// Solution - 1
// Runtime - 79ms 87.59%
// Memory - 54.52MB 48.51%

var solution1 = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};

console.log(solution1([2, 3, 0, 0])); //[0,2,6,0] / [0,0,0,0]
console.log(solution1([-1, 1, 0, -3, 3])); //[0,0,9,0,0] / [0,-1,9,0,0]
// console.log(solution1([0, 2, 3, 4])); //[24,0,0,0]
// console.log(solution1([5, 9, 2, -9, -9, -7, -8, 7, -9, 10]));
//[-51438240,-28576800,-128595600,28576800,28576800,36741600,32148900,-36741600,28576800,-25719120]
// console.log(solution1([2, 3, 0, 0])); //[0,0,9,0,0]
