// No:2648 - https://leetcode.com/problems/generate-fibonacci-sequence/

// Solution - 1
// Runtime - 50ms 62.21%
// Memory - 41.56MB 88.07%
// P/S: this should be generic, even without params
var solution = function* () {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    let temp = current + next;
    current = next;
    next = temp;
  }
};

let solution1 = solution();

console.log(solution1.next());
