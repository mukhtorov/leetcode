// No:1773 - https://leetcode.com/problems/count-items-matching-a-rule/description/

// Solution - 1
// Runtime - 58ms 88.98%
// Memory - 45.98MB 57.7%

var solution1 = function (items, ruleKey, ruleValue) {
  let rule = { type: 0, color: 1, name: 2 };
  let res = items.filter((item) => item[rule[ruleKey]] === ruleValue);

  return res.length;
};

console.log(
  solution1(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
