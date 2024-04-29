/**
 *
 * https://leetcode.com/problems/sort-list/
 *
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

//TODO : Not a proper solution
var sortList = function (head) {
  if (!head) return null;
  let temp = head;
  let sorted = false;

  let count = function countList(head) {
    if (!head) return 0;
    let temp = head;
    let sum = 0;
    while (temp) {
      sum++;
      temp = temp.next;
    }
  };

  console.log(count);

  while (!sorted) {
    let p1 = temp;
    let p2 = temp.next;

    while (p2 !== null) {
      if (p1.val >= p2.val) {
        //Swap
        let dummyNode = p2.next;
        p2.next = p1;
        p1.next = dummyNode;
        sorted = true;
      } else {
        p1 = p1.next;
        p2 = p2.next;
      }
    }
  }

  return head;
};
