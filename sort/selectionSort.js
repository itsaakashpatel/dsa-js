/**
 * 
 
Select maximum value from the array and swap the position
After each step right portion is already sorted, first step is completed then last position has sorted value.
You don’t need to check for the last position once you have completed length - 1  steps.
In general, swap 0 node with go till [0..n-1]
swap 1 node with go till [1.. n-1]
Time complexity in best, worst, and average: O(N * 2)

 */

function selectionSort(arr) {
  //Find max number from unsorted array
  //Swap with relevant position
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1; //After every pass right side will be sorted...
    let maxIndex = getMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
  }
}

function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

function getMaxIndex(array, start, end) {
  let max = start;
  for (let index = start; index <= end; index++) {
    const element = array[index];
    if (element > arr[max]) max = index;
  }

  return max;
}

let arr = [7, 5, 4, 3, 2];

selectionSort(arr);

console.log(arr.toString());
