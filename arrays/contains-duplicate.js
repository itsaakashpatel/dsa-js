/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function (nums) {
  if (nums.length < 2) {
    return false;
  }

  let temp = new Set();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (temp.has(element)) return true;
    else temp.add(element);
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
