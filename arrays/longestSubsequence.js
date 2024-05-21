/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const sortedNums = nums.sort((a, b) => a - b);

  let count = 0;
  let max = count;
  for (let i = 0; i < sortedNums.length; i++) {
    const element = sortedNums[i];
    //Consecutive element is present
    if (sortedNums[i + 1] - element === 1) {
      count++;
    } else if (element === sortedNums[i + 1]) {
      continue;
    } else {
      count++;
      if (count > max) max = count;
      count = 0;
    }
  }

  return max;
};

console.log(longestConsecutive([1, 2, 0, 1]));
