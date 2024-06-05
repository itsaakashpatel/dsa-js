/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  function recur(processedNums, unprocessedNums) {
    if (unprocessedNums.length === 0) {
      result.push(processedNums);
      return;
    }

    for (let i = 0; i < unprocessedNums.length; i++) {
      recur(
        [unprocessedNums[i], ...processedNums],
        [...unprocessedNums.slice(0, i), ...unprocessedNums.slice(i + 1)]
      );
    }
  }

  recur([], nums);

  return result;
};

let nums = [1, 2, 3];

console.log(permute(nums));
