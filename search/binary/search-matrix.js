/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  //Finding the correct row using binary search, as we know every row is sorted and last value of each row is smaller than the first value of next row

  if (target < matrix[0][0] || target > matrix[rows - 1][cols - 1]) return false;

  let topRow = 0;
  let bottomRow = rows - 1;

  let mid;
  while (topRow <= bottomRow) {
    mid = Math.floor((topRow + bottomRow) / 2);

    if (target < matrix[mid][0]) bottomRow = mid - 1;
    else if (target > matrix[mid][cols - 1]) topRow = mid + 1;
    else break; //Found a row in which the target is present
  }

  return binarySearch(matrix[mid], target);
};

function binarySearch(nums, target) {
  let n = nums.length; // size of the array
  let low = 0,
    high = n - 1;

  // Perform the steps:
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return true;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}

let matrix = [[1], [3]],
  target = 3;

console.log(searchMatrix(matrix, target));
