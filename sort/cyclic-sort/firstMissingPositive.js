//There is only one repeated number in nums, return this repeated number. Range - [0, n]

const nums = [1, 2, 0];

console.log(firstMissingPositive(nums));

function firstMissingPositive(array) {
  let i = 0;
  const length = array.length;

  while (i < length) {
    const correct = array[i] - 1;
    if (array[i] > 0 && array[i] < length && array[i] !== array[correct]) {
      //if array[i] is not the same with correct index element
      swap(array, i, correct);
    } else i++;
  }

  //Find a missing number
  for (let index = 0; index < length; index++) {
    if (index + 1 !== array[index]) return index + 1;
  }

  return length + 1;
}

function swap(array, first, second) {
  [array[first], array[second]] = [array[second], array[first]];
}
