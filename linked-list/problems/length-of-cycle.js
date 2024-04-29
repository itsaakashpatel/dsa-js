/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * https://leetcode.com/problems/linked-list-cycle/
 *
 * Instead of returning true or false, return length of cycle. The length of cycle is when slow pointer meets the fast pointer in the next turn.
 * The idea is to keep fast pointer as it is when we find the point where both met, and only slow pointer will go forward.
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

    if (fast === slow) {
      let count = 0;
      let temp = slow;
      do {
        temp = temp.next;
        count++;
      } while (temp !== fast);

      return count;
    }
  }

  return 0;
};
