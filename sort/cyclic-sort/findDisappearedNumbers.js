const nums = [1, 1]; //Range - [1, n]

console.log(findDisappearedNumbers(nums));

function findDisappearedNumbers(nums) {
  let missingNumbers = [];
  cyclicSort(nums);
  //To check each element should be at the right place otherwise it's disappeared

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) missingNumbers.push(index + 1);
  }
  return missingNumbers;
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
