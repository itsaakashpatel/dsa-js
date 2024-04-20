// Implement bubble sort using recursion
function bubbleSort(nums, n) {
  if (n == 1) {
    return nums;
  }

  //Swap the elements by comparing them
  for (let j = 0; j < n - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }

  //Recursively call the function to sort.
  return bubbleSort(nums, n - 1);
}

const array = [4, 3, 5, 1, 6];

console.log(bubbleSort(array, array.length));
