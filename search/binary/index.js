function binarySearch(nums, target) {
  let n = nums.length; // size of the array
  let low = 0,
    high = n - 1;

  // Perform the steps:
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

function modifiedBinarySearch(nums, target) {
  function condition(value) {
    return target === value;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log("🚀 ~ modifiedBinarySearch ~ mid:", mid);

    if (condition(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = modifiedBinarySearch(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);

export default binarySearch;
