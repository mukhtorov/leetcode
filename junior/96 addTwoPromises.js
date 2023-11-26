// No:2723 - https://leetcode.com/problems/add-two-promises/

// Solution - 1
// Runtime - 53ms 86%
// Memory - 42.06MB 51%

var solution1 = async function (words, x) {
  let resolve1 = await promise1;
  let resolve2 = await promise2;
  return resolve1 + resolve2;
};

// Solution - 1
// Runtime - 49ms 94%
// Memory - 42.26MB 28%
var solution2 = async function (words, x) {
  const [res1, res2] = await Promise.all([promise1, promise2]);

  return res1 + res2;
};

console.log(solution1(["leet", "code"], "e")); // 9
console.log(solution1([1, 2, 3, 4])); // 0
