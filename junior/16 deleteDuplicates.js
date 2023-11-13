// No:83 - https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Solution - 1
// Runtime - 56ms / 79.69%
// Memory - 44.10MB / 60.56%
var solution1 = function (head) {
  let current = head;
  while (current !== null) {
    if (current.next && current.next.val === current.val)
      current.next = current.next.next;
    else current = current.next;
  }
  return head;
};

// Data Structure!

console.log(solution1(5));
