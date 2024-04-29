/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let temp = 1;
  let leftSide = head;
  let rightSide = head;
  let current = head;
  let prev = null;

  if (left === right || !head) {
    return head;
  }

  while (temp !== right) {
    if (temp === left) {
      leftSide = prev;
    }
    prev = current;
    current = current.next;
    temp++;
  }

  rightSide = current.next;

  //reverse the list
  current = leftSide ? leftSide.next : head;
  prev = rightSide;
  let next = current.next;

  for (let i = 0; current !== null && i < right - left + 1; i++) {
    current.next = prev;
    prev = current;
    current = next;
    if (next !== null) {
      next = next.next;
    }
  }

  if (leftSide !== null) {
    leftSide.next = prev;
  } else {
    head = prev;
  }

  return head;
};

export default reverseBetween;
