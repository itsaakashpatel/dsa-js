//Check whether an array is sorted using recursion
function sortedArray(arr, i) {
  //Compare two elements and search for rest of search space using recursion
  if (i === arr.length - 1) return true;
  return arr[i] < arr[i + 1] && sortedArray(arr, i + 1);
}

console.log(sortedArray([1, 2, 4, 5, 5], 0));
