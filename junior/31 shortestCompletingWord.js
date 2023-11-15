// No:599 - https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// Solution - 1
// Runtime - 60ms 91.34%
// Memory - 49.48MB 22.83%
var solution1 = function (licensePlate, words) {
  let checker = licensePlate.match(/[a-z]/gi).join("");
  let res = words.filter((val) => {
    return [...checker].every((letter) => {
      return (
        val.match(new RegExp(`${letter}`, "gi"))?.length >=
        checker.match(new RegExp(`${letter}`, "gi"))?.length
      );
    });
  });

  return res.sort((a, b) => a.length - b.length);
};

console.log(solution2("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
