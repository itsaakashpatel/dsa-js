/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 *                    recur(0, [])
                   /                \
        recur(1, [1])                recur(1, [])
        /                \                /                \
recur(2, [1, 2])    recur(2, [1])    recur(2, [2])    recur(2, [])
  /        \            /        \        /        \        /        \
[1, 2, 3] [1, 2]    [1, 3]    [1]    [2, 3]    [2]    [3]    []

 */
var subsets = function (nums) {
  const subsets = [];

  function recur(index, subset) {
    if (index === nums.length) {
      console.log('🚀 ~ recur ~ index:', {index, subset});
      subsets.push(subset);
      return;
    }

    recur(index + 1, subset.concat(nums[index]));
    recur(index + 1, subset);
  }

  recur(0, []);

  return subsets;
};

let nums = [1, 2, 3];

console.log(subsets(nums));
