// No:2660 - https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/description/

// Solution - 1
// Runtime - 70ms 49.64%
// Memory - 44.76MB 53.95%

var solution1 = function (player1, player2) {
  let sum = (player) =>
    player.reduce((accum, value, i) => {
      if (player[i - 1] === 10 || player[i - 2] === 10)
        return accum + value * 2;
      return accum + value;
    });
  let sum1 = sum(player1);
  let sum2 = sum(player2);
  return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : 2;
};

// Solution - 1
// Runtime - 62ms 87.77%
// Memory - 44.76MB 100%

var solution2 = function (player1, player2) {
  let p1Total = 0;
  let p2Total = 0;

  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      p1Total += 2 * player1[i];
    } else {
      p1Total += player1[i];
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      p2Total += 2 * player2[i];
    } else {
      p2Total += player2[i];
    }
  }

  if (p1Total === p2Total) return 0;
  return p1Total < p2Total ? 2 : 1;
};
console.log(solution1([3, 6, 10, 8], [9, 9, 9, 9])); // 2
