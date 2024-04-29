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

  //move all items to list array

  let list = [];
  let temp = head;

  while (temp !== null) {
    list.push(temp);
    temp = temp.next;
  }

  let n = list.length;
  let current = head;

  for (let i = 0; i < n / 2; i++) {
    const pt = i % 2 === 0 ? list[i] : list[n - i - 1];
    current.next = pt;
    current = pt;
  }
  console.log("temp", JSON.stringify(head, null, 2));
  //   process.exit(0);

  return head;
};

export default reorderList;
