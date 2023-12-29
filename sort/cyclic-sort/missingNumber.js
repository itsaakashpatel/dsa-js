//numbers given [0, n], find a missing number

const arr = [4, 0, 2, 1];

//Sort the array, then check if every elements are at the right index, if any one is not at the right index that's the answer.

console.log(missingNumber(arr));

function missingNumber(array) {
  let i = 0;
  const length = array.length;
  while (i < length) {
    const correct = array[i]; //Here, the range starts from 0
    if (array[i] < length && array[i] !== array[correct]) {
      //if array[i] is not the same with correct index element
      swap(array, i, correct);
    } else i++;
  }

  //Find a missing number
  for (let index = 0; index < length; index++) {
    if (index !== array[index]) return index;
  }

  return length;
}

function swap(array, first, second) {
  [array[first], array[second]] = [array[second], array[first]];
}
