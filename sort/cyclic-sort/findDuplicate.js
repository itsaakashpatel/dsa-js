//There is only one repeated number in nums, return this repeated number. Range - [1, n]

const nums = [3, 1, 3, 4, 2];

console.log(findDuplicate(nums));

function findDuplicate(nums) {
  cyclicSort(nums);

  //After sorting the array, every element is index + 1, if it's not then it's a duplicate number

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      return nums[index];
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
