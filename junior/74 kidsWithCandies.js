// No:1431 - https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

// Solution - 1
// Runtime - 49ms 82.65%
// Memory - 42.14MB 72.95%
// two solution almost the same

var solution1 = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((val) => max <= val + extraCandies);
};

console.log(solution1([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(solution1([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
