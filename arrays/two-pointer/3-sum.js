/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * https://leetcode.com/problems/3sum/
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */
var threeSum = function (nums) {
  const target = 0;
  let final = [];

  //sort an array
  nums.sort((a, b) => a - b);
  console.log(nums);

  //LOGIC: We are going to fix position of i

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > target) {
      //First value is greater than target
      break;
    }

    if (i > 0 && element === nums[i - 1]) {
      //we don't want duplicates, so as we have a sorted array which means two consecutive elements can be of same value
      // And we don't want duplicates, so we should skip.
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const threeSum = element + nums[j] + nums[k];

      if (threeSum === target) {
        final.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        // What if j is the same as the previous value, then we will have duplicate elements, hence we need to skip j until we find a new number.
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }

      if (threeSum < target) j++;
      else if (threeSum > target) k--;
    }
  }

  return final;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
