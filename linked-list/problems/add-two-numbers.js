/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 243 + 564 = 708.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let result = dummy;

  let total = 0,
    carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }

    let num = total % 10;
    carry = Math.floor(total / 10);
    dummy.next = new ListNode(num);
    dummy = dummy.next;
  }

  return result.next;
};
