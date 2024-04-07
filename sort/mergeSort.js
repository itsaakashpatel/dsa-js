/**
 * 1. Divide array into 2 parts
 * 2. Sort left and right part(array) using recursion
 * 3. Merged sorted parts, whenever one array is empty the put remaining elements of another array as it is.
 *
 */

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(first = [], second = []) {
  let i = 0,
    j = 0,
    k = 0,
    final = [];

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      final[k] = first[i];
      i++;
    } else {
      final[k] = second[j];
      j++;
    }
    k++;
  }

  while (i < first.length) {
    final[k] = first[i];
    i++;
    k++;
  }

  while (j < second.length) {
    final[k] = second[j];
    j++;
    k++;
  }
  return final;
}

let arr = [3, 5, 2, 1, 4];

console.log(mergeSort(arr));
