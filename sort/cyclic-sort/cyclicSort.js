let arr = [3, 5, 2, 1, 4];

console.log(cyclicSort(arr));

function cyclicSort(array) {
  let i = 0;
  while (i < array.length) {
    const correct = array[i] - 1;
    if (array[i] !== array[correct]) {
      //if array[i] is not the same with correct index element
      swap(array, i, correct);
    } else i++;
  }
  return array;
}

function swap(array, first, second) {
  [array[first], array[second]] = [array[second], array[first]];
}
