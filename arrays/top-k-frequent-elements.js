/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
var topKFrequent = function (nums, k) {
  if (nums.length <= 1) {
    return nums;
  }

  let numberHash = new Map();

  for (const num of nums) {
    if (numberHash.has(num)) {
      let count = numberHash.get(num);
      numberHash.set(num, ++count);
    } else {
      numberHash.set(num, 1);
    }
  }

  let result = [...numberHash.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);

  return result;
};

console.log(topKFrequent([1, 2], 2));
