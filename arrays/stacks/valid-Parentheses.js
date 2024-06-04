/**
 * @param {string} s
 * @return {boolean}
 *
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    //If we find an opening bracket, push to stack.
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let last = stack[stack.length - 1];
      
      if (
        (s[i] === ")" && last === "(") ||
        (s[i] === "}" && last === "{") ||
        (s[i] === "]" && last === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

console.log(isValid("()"));
