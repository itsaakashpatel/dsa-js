/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const l1 = nums1.length;
  const l2 = nums2.length;

  let left = 0,
    right = l1;

  while (left <= right) {
    //Partition of nums1 and nums2

    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((l1 + l2 + 1) / 2);
  }
};
let nums1 = [1, 3],
  nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
