/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;

  let prev = null;
  let present = head;
  let next = present.next;

  while (present !== null) {
    present.next = prev;
    prev = present;
    present = next;
    if (next !== null) {
      next = next.next;
    }
  }

  head = prev;

  return head;
};

export default reverseList;
