// No:1588 - https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

// Solution - 1
// Runtime - 61ms 84%
// Memory - 44.28MB 52%

var solution1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let total = Math.ceil(((i + 1) * (arr.length - i)) / 2);
    sum += total * arr[i];
  }
  return sum;
};

console.log(solution1([1, 4, 2, 5, 3])); //58
