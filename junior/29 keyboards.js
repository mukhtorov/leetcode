// No:500 - https://leetcode.com/problems/keyboard-row/description/

// Solution - 1
// Runtime - 42ms / 92.99%
// Memory - 41.81MB / 46.84%
var solution1 = function (words) {
  let firstLine = /[qwertyuiop]/gi;
  let secondLine = /[asdfghjkl]/gi;
  let thirdLine = /[zxcvbnm]/gi;

  return words.filter(
    (val) =>
      val.length === val.match(firstLine)?.length ||
      val.length === val.match(secondLine)?.length ||
      val.length === val.match(thirdLine)?.length
  );
};

console.log(solution1(["Hello", "Alaska", "Dad", "Peace"]));
