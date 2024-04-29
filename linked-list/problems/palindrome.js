/**
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Using Recursion
var isPalindrome = function (head) {
  let current = head;
  return checkRecursive(current);

  function checkRecursive(node) {
    if (node === null) return true;

    const ans = checkRecursive(node.next) && node.value === current.value;
    current = current.next;
    return ans;
  }
};

//Using Strings
var isPalindrome = function (head) {
  let string1 = "",
    string2 = "";
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};

export default isPalindrome;
