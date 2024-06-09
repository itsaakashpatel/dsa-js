let sum = 0;
function reverseNum(n) {
  if (n === 0) {
    return;
  }

  let reminder = n % 10;

  sum = sum * 10 + reminder;

  reverseNum(Math.floor(n / 10));
}

function reverseString(n) {
  return n.split('').reverse().join('');
}

function reverseNumber(n) {
  if (n === 0) return '';

  let reminder = n % 10;

  return reminder + '' + reverseNumber(Math.floor(n / 10));
}

reverseNum(2431);

console.log(sum);
console.log(reverseString('Aakash'));
console.log(reverseNumber(2431));
