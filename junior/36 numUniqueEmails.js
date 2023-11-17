// No:824 - https://leetcode.com/problems/goat-latin/

// Solution - 1
// Runtime - 72ms 40.13%
// Memory - 46.90MB 52.97%

var solution1 = function (emails) {
  let set = new Set();
  emails.forEach((element) => {
    let at = element.indexOf("@");
    let temp = "";
    for (let i = 0; i <= at; i++) {
      if (element[i] === ".") continue;
      if (element[i] === "+" || element[i] === "@") {
        set.add(temp + element.slice(at));
        break;
      }
      temp += element[i];
    }
  });
  return set.size;
};

// Solution - 1
// Runtime - 72ms 40.13%
// Memory - 46.90MB 52.97%

var solution2 = function (emails) {
  let set = new Set();

  emails.forEach((element) => {
    let [local, domain] = element.split("@");
    let temp = "";
    local = local.replaceAll(".", "");
    for (let i = 0; i <= local.length; i++) {
      console.log(local[i]);
      if (local[i] === "+" || local[i] === undefined) {
        set.add(temp + "@" + domain);
        break;
      }
      temp += local[i];
    }
  });
  return set.size;
};

// P/S: not good way
console.log(solution1(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));
