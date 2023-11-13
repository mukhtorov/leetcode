// ex:14 - https://leetcode.com/problems/longest-common-prefix/description/

// Solution - 1
// Runtime 61ms / 23.89%
// Memory 42.86MB / 28.35%
function solution1(strs = []) {
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((str) => str[i] === strs[0][i])) res += strs[0][i];
    else break;
  }
  return res;
}

// PS: lekin menga bu yoqmadi, keyin vaqt bo'lganda ko'rib chiqaman buni...

console.log(solution1(["flower", "flower", "flightwer"]));
