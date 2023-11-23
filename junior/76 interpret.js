// No:1678 - https://leetcode.com/problems/goal-parser-interpretation/

// Solution - 1
// Runtime - 99.86%
// Memory - 28%
// bulshit question ))

var solution1 = function (command) {
  command = command.replace(/\(\)/gi, "o");
  command = command.replace(/\(al\)/gi, "al");

  return command;
};

console.log(solution1("(al)G(al)()()G")); //
