/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * https://leetcode.com/problems/valid-anagram/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1);
  }

  for (let j = 0; j < t.length; j++) {
    const element = t[j];
    if (!hashMap.has(element) || hashMap.get(element) === 0) return false;
    hashMap.set(element, hashMap.get(element) - 1);
  }

  return true;
};

console.log(isAnagram('rat', 'car'));
