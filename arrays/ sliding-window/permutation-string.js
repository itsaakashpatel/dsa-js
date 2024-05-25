/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
 */
var checkInclusion = function (s1, s2) {
  if (s1.length === 0) return true;

  let left = 0,
    right = 0,
    charMap = new Map();

  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    charMap.set(element, (charMap.get(element) || 0) + 1);
  }

  //e i d b o a o o TODO: Need to work on the logic still passing all cases

  while (right < s2.length) {
    if (!charMap.has(s2[right])) {
      left++;
    } else {
      console.log("left and right", { left, right, charMap });
      charMap.set(s2[right], charMap.get(s2[right]) - 1);
      let isEmpty = Math.max(...charMap.values());

      if (!isEmpty) return true;
    }
    right++;
  }

  return false;
};

console.log(checkInclusion("ab", "eidboaoo"));
