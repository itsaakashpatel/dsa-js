let count = 0;
function countZero(params) {
  if (params === 0) {
    return count;
  }
  let reminder = params % 10;
  if (reminder === 0) count++;
  return countZero(Math.floor(params / 10));
}

console.log(countZero(100001));
