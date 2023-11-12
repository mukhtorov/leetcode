// link - https://leetcode.com/problems/merge-two-sorted-lists

// Solution - 1
// Runtime 64ms / 27.78%
// Memory 44.06MB / 57.26%
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// PS: Data structure orqali qilingan. Agar data structure bilmasangiz skip qilganingiz maqul
