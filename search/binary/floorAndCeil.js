//Floor and Ceil in Sorted Array : https://takeuforward.org/arrays/floor-and-ceil-in-sorted-array/

/**
 * Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.

Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

Example 2:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
Result: 8 8
Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.
 */

function floor(nums, target) {
  let left, right, mid, ans;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= target) {
      ans = nums[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans || -1;
}

function ceil(nums, target) {
  let left, right, mid, ans;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      ans = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans || -1;
}

let getFloor = floor([3, 4, 4, 7, 8, 10], 5);
let getCeil = ceil([3, 4, 4, 7, 8, 10], 5);

console.log({ getFloor, getCeil });
