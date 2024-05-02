/**
 *
 * https://leetcode.com/problems/reorder-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) return null;

  let list = [];
  let temp = head;

  while (temp !== null) {
    list.push(temp);
    temp = temp.next;
  }

  let n = list.length;
  let current = head;
  let left = 1;
  let right = n - 1;

  while (left <= right) {
    current.next = list[right];
    current = current.next;
    right--;
    current.next = list[left];
    current = current.next;
    left++;
  }
  current.next = null;
  return head;
};

export default reorderList;
