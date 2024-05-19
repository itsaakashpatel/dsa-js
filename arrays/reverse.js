var reverseArray = function (nums) {
  if (nums.length === 0) return nums;

  //Two pointers
  let start = 0,
    end = nums.length - 1;

  while (end > start) {
    let temp = nums[end];
    nums[end] = nums[start];
    nums[start] = temp;

    start++;
    end--;
  }

  return nums;
};

const arr = [12, 45, 37, 56];
console.log(reverseArray(arr));
