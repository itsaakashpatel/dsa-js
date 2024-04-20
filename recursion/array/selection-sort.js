function selectionSort(a, n, index = 0) {
  // Return when starting and size are same
  if (index == n) return a;

  // calling minimum index function for minimum index
  const k = minIndex(a, index, n - 1);

  // Swapping when index and minimum index are not same
  if (k != index) [a[k], a[index]] = [a[index], a[k]];

  // Recursively calling selection sort function
  selectionSort(a, n, index + 1);
}

function minIndex(a, i, j) {
  if (i == j) return i;

  // Find minimum of remaining elements
  const k = minIndex(a, i + 1, j);

  // Return minimum of current and remaining.
  return a[i] < a[k] ? i : k;
}

const array = [4, 3, 5, 1, 6];
selectionSort(array, array.length);

console.log(array);
