/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * https://leetcode.com/problems/group-anagrams/description/
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs];
  }

  let stringHash = new Map();
  let final = [];

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortString = str.split('').sort().join('');
    const checkString = stringHash.has(sortString);

    if (checkString) {
      final[stringHash.get(sortString)].push(str);
    } else {
      stringHash.set(sortString, final.length);
      final.push(new Array(str));
    }
  }

  return final;
};

const strings = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strings));
