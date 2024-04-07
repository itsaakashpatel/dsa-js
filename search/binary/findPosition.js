//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 * 
 */

function findPosition(nums, target) {
  function searchRange(array, target, searchLeft) {
    let left = 0,
      right = nums.length - 1,
      index = -1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (target > array[mid]) {
        left = mid + 1;
      } else if (target < array[mid]) {
        right = mid - 1;
      } else {
        index = mid;

        if (searchLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return index;
  }

  const start = searchRange(nums, target, true);
  const end = searchRange(nums, target, false);

  return [start, end];
}

console.log(findPosition([5, 7, 7, 8, 8, 10], 8));
