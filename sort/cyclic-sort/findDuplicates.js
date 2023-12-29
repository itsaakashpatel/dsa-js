//return an array of all the integers that appears twice. Range - [1, n]

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDuplicates(nums));

function findDuplicates(nums) {
  let i = 0,
    duplicateNumbers = [];
  const n = nums.length;

  while (i < n) {
    const correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      swap(nums, i, correctIndex);
    } else {
      i++;
    }
  }

  //Find a missing number
  for (let index = 0; index < n; index++) {
    if (nums[index] !== index + 1) duplicateNumbers.push(nums[index]);
  }

  return duplicateNumbers;
}

function swap(nums, first, second) {
  [nums[first], nums[second]] = [nums[second], nums[first]];
}
