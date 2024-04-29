/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * 
 * Input: head = [1,1,2]
 * Output: [1,2]
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]

 * 
 */

var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let temp = head;

  while (temp.next !== null) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return head;
};
