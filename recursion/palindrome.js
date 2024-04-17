let sum = 0;
function reverseNum(n) {
  if (n === 0) {
    return;
  }

  let reminder = n % 10;

  sum = sum * 10 + reminder;

  reverseNum(Math.floor(n / 10));
}

function palindrome(n) {
  reverseNum(n);
  return sum === n;
}

console.log(palindrome(121));
