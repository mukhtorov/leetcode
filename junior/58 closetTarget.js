// No:2515 - https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/

// Solution - 1
// Runtime - 55ms 61.22%
// Memory - 44.89MB 81.63%

var solution1 = function (words, target, startIndex) {
  if (!words.includes(target)) return -1;
  let left = (right = startIndex);
  let step = 0;
  let length = words.length;

  while (step <= length) {
    if (words[left] === target || words[right] === target) return step;

    right = (right + 1) % length;
    left = (left - 1 + length) % length;
    step++;
  }
};

// Solution - 1
// Runtime - 54ms 65.3%
// Memory - 44.44MB 100%
var solution2 = function (words, target, startIndex) {
  if (!words.includes(target)) return -1;
  let start = -1;
  for (let i = startIndex; ; i++) {
    let word = words[i % words.length];
    start++;
    if (word === target) break;
  }
  let back = -1;
  for (let i = startIndex; ; i--) {
    let index = (words.length + i) % words.length;
    back++;
    if (words[index] === target) break;
  }
  return start >= back ? back : start;
};

// console.log(
//   solution1(
//     [
//       "hsdqinnoha",
//       "mqhskgeqzr",
//       "zemkwvqrww",
//       "zemkwvqrww",
//       "daljcrktje",
//       "fghofclnwp",
//       "djwdworyka",
//       "cxfpybanhd",
//       "fghofclnwp",
//       "fghofclnwp",
//     ],
//     "zemkwvqrww",
//     8
//   )
// ); //4
// console.log(
//   solution1(
//     [
//       "odjrjznxpn",
//       "cyulttuabe",
//       "zqxkdoeszk",
//       "yeewpgriok",
//       "odjrjznxpn",
//       "btqpvxpjzv",
//       "ukyudladhk",
//       "ukyudladhk",
//       "odjrjznxpn",
//       "yeewpgriok",
//     ],
//     "odjrjznxpn",
//     5
//   )
// ); // 2
// console.log(solution1(["hello", "i", "am", "leetcode", "hello"], "hello", 1)); //1
// console.log(solution1(["a", "b", "leetcode"], "leetcode", 0)); //1
// console.log(solution1(["are", "amy", "u"]));
// console.log(["a", "b", "leetcode"].at(-1));

console.log(
  [
    "odjrjznxpn",
    "cyulttuabe",
    "zqxkdoeszk",
    "yeewpgriok",
    "odjrjznxpn",
    "btqpvxpjzv",
    "ukyudladhk",
    "ukyudladhk",
    "odjrjznxpn",
    "yeewpgriok",
  ].lastIndexOf("odjrjznxpn", 5)
);
