/**
 * @param {string} str
 * @return {number}
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 * */
// var lengthOfLongestSubstring = function (str) {
//   if (str.length === 0) return 0;

//   //Brute force way... not optimal
//   let currentString = "";
//   let maxLength = 0;
//   for (let left = 0; left < str.length; left++) {
//     const element = str[left];
//     let right = left + 1;

//     if (currentString.includes(element)) {
//       continue;
//     } else {
//       currentString += element;
//     }

//     while (right < str.length) {
//       if (currentString.includes(str[right])) {
//         left = right;
//         break;
//       } else {
//         currentString += str[right];
//         right++;
//       }
//     }

//     console.log("cr", { currentString, maxLength });

//     maxLength = Math.max(maxLength, currentString.length);
//     currentString = "";
//   }

//   return maxLength;
// };

var lengthOfLongestSubstring = function (str) {
  if (str.length === 0) return 0;

  let left = 0,
    right = 0;
  let maxLength = 0,
    indexHash = new Map();
  while (right < str.length) {
    if (indexHash.has(str[right])) {
      const existingIndex = indexHash.get(str[right]);
      if (existingIndex >= left) {
        left = existingIndex + 1;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
    indexHash.set(str[right], right);
    right++;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('pwwkew'));
