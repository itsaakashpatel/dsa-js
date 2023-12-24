let arr = [7, 5, 4, 3, 2];

selectionSort(arr);

console.log(arr.toString());

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
