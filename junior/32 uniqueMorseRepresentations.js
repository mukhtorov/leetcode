// No:804 - https://leetcode.com/problems/unique-morse-code-words/description/

// Solution - 1
// Runtime - 41ms 99.55%
// Memory - 43.22MB 63.15%
var solution1 = function (words) {
  let letters = [
    ".-", // - a 0
    "-...", // - b 1
    "-.-.", // - c 2
    "-..", // - d	 3
    ".", // - 	e 4
    "..-.", // - f 5
    "--.", // - 	g 6
    "....", // - 	h 7
    "..", // - 	i 8
    ".---", // - j 9
    "-.-", // - 	k 10
    ".-..", // - 	l 11
    "--", // - 	m 12
    "-.", // - 	n 13
    "---", // -  o 14
    ".--.", // - 	p 15
    "--.-", // - 	q 16
    ".-.", // - 	r 17
    "...", // - 	s 18
    "-", // - 	t 19
    "..-", // - u 20
    "...-", // - 	v 21
    ".--", // - 	w 22
    "-..-", // - 	x 23
    "-.--", // - 	y 24
    "--..", // - 	z 25
  ];

  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    let temp = "";
    for (val of words[i]) {
      temp += letters[val.charCodeAt() - 97];
    }
    set.add(temp);
  }
  return set.size;
};

console.log(solution1(["gin", "zen", "gig", "msg"]));
