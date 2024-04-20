function rotatedSearch(array, target, start, end) {
  if (start > end) return -1;

  let middle = start + Math.floor((end - start) / 2);

  console.log("middle", middle);

  //If middle element is the target element
  if (array[middle] === target) return middle;
  if (array[start] <= array[middle]) {
    if (target < array[middle])
      return rotatedSearch(array, target, start, middle - 1);
    else return rotatedSearch(array, target, middle + 1, end);
  }

  if (target > array[middle] && target <= array[end])
    return rotatedSearch(array, target, middle + 1, end);
  else return rotatedSearch(array, target, start, middle - 1);
}

function rotatedSearch2(nums, target) {
  let low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    //We have to figure out if search space is sorted or not
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

let array = [4, 5, 6, 7, 0, 1, 2];

// console.log(rotatedSearch(array, 0, 0, array.length - 1));
console.log(rotatedSearch2(array, 4));
