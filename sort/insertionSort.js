let arr = [7, 5, -4, 3, 2];

insertionSort(arr);

console.log(arr.toString());

function insertionSort(array) {
  // Every pass, we will check if current item is smaller or not than previous item, if yes then swap the values, if not then break the loop
  // After every pass, left side will be sorted
  // Time complexity: Worst: O(N2) and Best: O(N)

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) swap(array, j, j - 1);
      else break;
    }
  }
}

function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
