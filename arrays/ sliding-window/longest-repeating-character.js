/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABABCC", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBAAAAAAAAA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 */
var characterReplacement = function (str, k) {
  let left = 0,
    right = 0,
    maxLength = 0;

  let charMap = new Map();

  while (right < str.length) {
    let char = str[right];
    charMap.set(char, (charMap.get(char) || 0) + 1);

    let maxCharCount = Math.max(...charMap.values());
    let windowSize = right - left + 1;
    let replacement = windowSize - maxCharCount;

    if (replacement > k) {
      let leftChar = str[left];
      charMap.set(leftChar, charMap.get(leftChar) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

console.log(characterReplacement('ABBB', 2));

//Notes:
/**
 *
 * store count of each chars of a window
 * Get max char count from hash
 * char replacement would be windowSize - maxCharCount
 * if replacement exceed to k then move left pointer to shrink the window and decrease the count of char from left
 * Store maxLength
 */
