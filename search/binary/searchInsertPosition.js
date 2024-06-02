//https://leetcode.com/problems/search-insert-position/

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 */

function searchInsertPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let correctIndex = nums.length;

  while (left <= right) {
    if (target < nums[left]) {
      return left;
    } else if (target > nums[right]) {
      return right + 1;
    }

    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      //Maybe an answer
      correctIndex = mid;
      //Keep searching for a lower index
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return correctIndex;
}

let searchIndex = searchInsertPosition([1, 3, 5, 6], 2);
console.log(searchIndex);
