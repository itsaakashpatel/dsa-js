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

var reverseListRecursively = function (head) {
  if (!head || !head.next) return head;

  let prev = null;
  let current = head;
  return recur(current, prev);

  function recur(current, prev) {
    if (!current) {
      return prev;
    }

    let next = current.next;
    current.next = prev;
    return recur(next, current);
  }
};

var reverseListEs6 = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }

  return prev;
};

export default reverseListEs6;
