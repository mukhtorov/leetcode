// No:2469 - https://leetcode.com/problems/convert-the-temperature/description/

// Solution - 1
// Runtime - 39ms 97.27%
// Memory - 41.94MB 37.53%

var solution1 = function (celsius) {
  return new Array(celsius + 273.15, celsius * 1.8 + 32.0);
};
