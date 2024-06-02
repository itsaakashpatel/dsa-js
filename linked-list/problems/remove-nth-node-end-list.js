/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  //Move the fast pointer till n
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  if (!fast) {
    return head.next;
  }

  // Then move both pointers to maintain the offset of n until fast.next !== null

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
