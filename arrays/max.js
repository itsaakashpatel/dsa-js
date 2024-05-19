var max = function (array) {
  if (array.length === 0) return 0;

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return max;
};

const arr = [2, 3, 45, 5, 6];
console.log(max(arr));
