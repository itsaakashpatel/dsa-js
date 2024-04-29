function bubbleSort(arr) {
  let swapped;
  //run the steps n-1 times
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;

    //for each step, max item will be at the last respective index in the array. It means each pass will set sorted array at the right side.
    for (let j = 1; j < arr.length - i; j++) {
      //swap the element if the item is smaller than the previous item
      if (arr[j] < arr[j - 1]) {
        //swap the element
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }

    // If you did not swap for a particular value of i, it means array is sorted
    // hence stop the execution
    if (!swapped) {
      break;
    }
  }

  return arr;
}

let arr = [1, 10, 4, 3, 2];

bubbleSort(arr);

console.log(bubbleSort(arr));
