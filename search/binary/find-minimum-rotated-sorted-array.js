/**
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
// var findMin = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[i - 1]) {
//       return nums[i];
//     }
//   }

//   return nums[0];
// };

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};

let nums = [4, 5, 6, 7, 0, 1, 2];

console.log(findMin(nums));
