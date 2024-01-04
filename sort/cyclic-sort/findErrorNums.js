//There is only one repeated number in nums, return this repeated number. Range - [1, n]

const nums = [1, 2, 2, 4];

console.log(findErrorNums(nums));

function findErrorNums(nums) {
  cyclicSort(nums);

  for (let element = 0; element < nums.length; element++) {
    if (nums[element] !== element + 1) {
      return [nums[element], element + 1]; //Repetitive element and missing element
    }
  }
}

function cyclicSort(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      swap(nums, i, correctIndex);
    } else i++;
  }

  return nums;
}

function swap(nums, first, second) {
  [nums[first], nums[second]] = [nums[second], nums[first]];
}
