// No:1720 - https://leetcode.com/problems/decode-xored-array/description/

// Solution - 1
// Runtime - 62ms 100%
// Memory - 48.51MB 66.78%

var solution1 = function (encoded, first) {
  let res = [first];
  encoded.forEach((val, i) => res.push(res[i] ^ val));

  return res;
};

console.log(solution1([1, 2, 3], 1)); // 15
