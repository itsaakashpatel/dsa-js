/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * https://leetcode.com/problems/linked-list-cycle/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Tip: use fast and slow pointer method when you find cycle related problems.
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};
